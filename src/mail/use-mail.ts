import { atom, useAtom } from "jotai";

import { MailObject, mails } from "./data";

type Config = {
    selected: MailObject["id"] | null;
};

const configAtom = atom<Config>({
    selected: mails[0].id,
});

export function useMail() {
    return useAtom(configAtom);
}
