"use client";
import Ideaview from "@/components/ideapreview";
import { useRouter } from "next/navigation";

const Preview = ({ params }) => {
  return (
    <div>
      <Ideaview ideaId={params.idea} />
    </div>
  );
};

export default Preview;
