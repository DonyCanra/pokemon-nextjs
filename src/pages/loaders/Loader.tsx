import Image from "next/image";

export default function Loader() {
  return (
    <div id="global-loader">
      <Image src="/images/svgs/loader.svg" alt="loader" width={100} height={100} />
    </div>
  );
}
