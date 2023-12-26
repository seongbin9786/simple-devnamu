const HeaderDemo = ({ threadName, tagContent }: { threadName: string; tagContent?: string }) => {
    return (
        <div>
            <div className="flex items-center gap-6 py-4">
                <p className="h-[30px] font-bold text-3xl">{threadName}</p>
                {tagContent && <p className="font-extralight text-sm">#{tagContent}</p>}
            </div>
            <hr />
        </div>
    );
};
export default HeaderDemo;
