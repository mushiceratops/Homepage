import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorksTabs } from "@/components/works/WorksTabs";
import { papers } from "@/data/papers";
import { thesis } from "@/data/thesis";
import { talks } from "@/data/talks";
import { presentations } from "@/data/presentations";

export const metadata = {
  title: "Works | Sohei Tsukahara",
};

export default function WorksPage() {
  return (
    <>
      <SectionHeading>Works</SectionHeading>
      <WorksTabs
        papers={papers}
        thesis={thesis}
        talks={talks}
        presentations={presentations}
      />
    </>
  );
}
