import { addDefaultDbDatas } from "@/components/utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
import store from "store";

export default function CreateAccount() {
  useEffect(() => {
    addDefaultDbDatas();
  }, []);
  const router = useRouter();
  useEffect(() => {
    if (Object.keys(router.query).length === 0) {
      return;
    }
    if (store.get("userCredentials")) {
      store.set("userCredentials", [
        ...store.get("userCredentials"),
        router.query,
      ]);
    } else {
      store.set("userCredentials", [router.query]);
    }
    store.set("activeUser", router.query);
    store.set("isLoggedIn", true);
    router.push("/");
  });
  return <></>;
}
