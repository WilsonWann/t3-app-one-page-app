import { Disclosure, Transition } from "@headlessui/react";
import AuthShowcase from "./AuthShowcase";

type Props = {
  data?: {
    greeting?: string;
  };
};

const AnimateMessage = (props: Props) => {
  return (
    <div>
      <Disclosure>
        <Disclosure.Button className="relative flex w-full justify-center rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
          <strong className="text-2xl">
            {props.data ? props.data.greeting : "Loading tRPC query..."}
          </strong>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="relative px-4 pb-2 pt-4 text-sm text-gray-500">
            <AuthShowcase />
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
};

export default AnimateMessage;
