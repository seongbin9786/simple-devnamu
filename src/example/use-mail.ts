import { atom, useAtom } from "jotai";

import { MailObject, mails } from "./data";

type Config = {
    selected: MailObject["id"] | null;
    mails: MailObject[];
};

const configAtom = atom<Config>({
    selected: mails[0].id,
    mails: mails,
});

export function useMail() {
    return useAtom(configAtom);
}
