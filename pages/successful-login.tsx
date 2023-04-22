import { addDefaultDbDatas } from "@/components/utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
import store from "store";

export default function SuccessfulLogin() {
  useEffect(() => {
    addDefaultDbDatas();
  }, []);
  useEffect(() => {
    if (Object.keys(router.query).length === 0) {
      return;
    }
    for (let data of store.get("userCredentials")) {
      if (
        data.email === router.query.email &&
        data.password === router.query.password
      ) {
        store.set("activeUser", data);
        router.push("/");
      } else {
        router.push("/login?failed=true");
      }
    }
  });
  const router = useRouter();
  return <></>;
}
