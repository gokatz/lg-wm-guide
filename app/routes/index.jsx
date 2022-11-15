import MachinePanel from "~/components/machine-panel";
import Example from "~/components/popper";

import stylesUrl from "~/styles/index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Example />
      <MachinePanel />
    </div>
  );
}
