import { useEffect, useRef } from "react";

interface Props {
    onInvisibleScrollDown: () => void;
    onVisibleScrollUp: () => void;
}

/**
 * DayDivider에서 visibility 변경에 따른 css position 변경을 처리하는 로직만 분리한 것
 */
export const useDayDividerVisibility = ({ onInvisibleScrollDown, onVisibleScrollUp }: Props) => {
    const separatorRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const wasSeparatorIntersecting = useRef<boolean | undefined>(undefined);
    const wasTextIntersecting = useRef<boolean | undefined>(undefined);

    const prevSeparatorY = useRef<number | undefined>(undefined);
    const prevTextY = useRef<number | undefined>(undefined);

    useEffect(() => {
        // 하행 시 text를 separator에서 떼어내 상단에 고정시킴
        const textObserver = new IntersectionObserver(
            (entries) => {
                const { isIntersecting, boundingClientRect } = entries[0];
                const { y } = boundingClientRect;

                // CASE 1. 최초 상태 초기화
                if (wasTextIntersecting.current === undefined) {
                    wasTextIntersecting.current = isIntersecting;
                    console.log("text visibility:", wasTextIntersecting.current);
                    prevTextY.current = y;
                    return;
                }

                if (wasTextIntersecting.current && !isIntersecting) {
                    console.log("now invisible");

                    // y 값 비교를 통한 방향 확인
                    // y가 크면 아래에 있는 것이고, y가 작으면 위에 있는 것임
                    if (typeof prevTextY.current !== "undefined") {
                        if (prevTextY.current > y) {
                            console.log("scroll up!");
                            onVisibleScrollUp();
                        }
                    }
                }

                // 현재 값 갱신
                wasTextIntersecting.current = isIntersecting;
                prevTextY.current = y;
            },
            {
                rootMargin: "-10px 0px 0px 0px", // margin으로 뭘 해결하긴 어려워 보임
            },
        );

        if (textRef.current) {
            textObserver.observe(textRef.current);
        }

        // 상행 시 separator가 출몰하면 positioning을 바꿔줌
        const separatorObserver = new IntersectionObserver(
            (entries) => {
                const { isIntersecting, boundingClientRect } = entries[0];
                const { y } = boundingClientRect;

                // CASE 1. 최초 상태 초기화
                if (wasSeparatorIntersecting.current === undefined) {
                    wasSeparatorIntersecting.current = isIntersecting;
                    console.log("separator visibility:", wasSeparatorIntersecting.current);
                    prevSeparatorY.current = y;
                    return;
                }

                // 등장하는 경우
                if (!wasSeparatorIntersecting.current && isIntersecting) {
                    console.log("now visible");

                    // y 값 비교를 통한 방향 확인
                    // y가 크면 아래에 있는 것이고, y가 작으면 위에 있는 것임
                    if (typeof prevSeparatorY.current !== "undefined") {
                        if (prevSeparatorY.current < y) {
                            console.log("scroll down!");
                            onInvisibleScrollDown();
                        }
                    }
                }

                // 현재 값 갱신
                wasSeparatorIntersecting.current = isIntersecting;
                prevSeparatorY.current = y;
            },
            {
                rootMargin: "-10px 0px 0px 0px",
            },
        );

        // useEffect는 렌더링 후에 실행되므로 항상 있음
        if (separatorRef.current) {
            separatorObserver.observe(separatorRef.current);
        }
    }, []);

    return [separatorRef, textRef];
};
