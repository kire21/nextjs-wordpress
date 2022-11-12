import Head from "next/head";
import BlockRenderer from "components/BlockRenderer/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";

export const Page = (props) => {
  return (
    <PageWrapper
      value={{
        title: props.title,
        propertyFeatures: props.propertyFeatures,
        featuredImage: props.featuredImage,
      }}
    >
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
      </Head>
      <MainMenu
        items={props.mainMenuItems}
        callToActionDestination={props.callToActionDestination}
        callToActionLabel={props.callToActionLabel}
      />
      <BlockRenderer blocks={props.blocks} />
    </PageWrapper>
  );
};
