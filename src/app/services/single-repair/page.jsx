
import { Suspense } from "react";
import SingleRepairPageContent from "./SingleRepairPageContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleRepairPageContent />
    </Suspense>
  );
}
