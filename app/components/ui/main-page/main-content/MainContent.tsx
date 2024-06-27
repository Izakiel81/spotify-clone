import React from "react";
import Header from "./header/Header";
import getSongs from "@/app/components/actions/getSongs";
import PageContent from "./page-content/PageContent";

type Props = {};

async function MainContent({}: Props) {
  const songs = await getSongs();
  return (
    <>
      <Header />
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
         <PageContent songs={songs}/>
        
      </div>
    </>
  );
}

export default MainContent;
