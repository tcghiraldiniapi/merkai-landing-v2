"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  imageNode?: React.ReactNode;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
  onButtonClick?: () => void;
}

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  tabs = [],
  onButtonClick,
}: Feature108Props) => {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        {tabs.length > 0 && (
          <Tabs defaultValue={tabs[0].value} className="mt-8">
            <TabsList className="flex flex-wrap items-center justify-center gap-2 px-4 sm:gap-4 md:gap-10">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary sm:px-4 sm:py-3"
                >
                  <span className="inline-flex items-center gap-2">{tab.icon}<span>{tab.label}</span></span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-4 sm:p-6 lg:p-10">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid place-items-center gap-8 lg:grid-cols-[2fr_3fr] lg:gap-8"
                >
                  <div className="flex flex-col gap-5">
                    <Badge variant="outline" className="w-fit bg-background">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
                      {tab.content.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {tab.content.description}
                    </p>
                    <Button className="mt-2.5 w-fit gap-2" size="lg" onClick={onButtonClick}>
                      {tab.content.buttonText}
                    </Button>
                  </div>
                  {tab.content.imageNode ? (
                    <div className="w-full min-h-[360px] lg:min-h-[440px] overflow-hidden rounded-xl">
                      {tab.content.imageNode}
                    </div>
                  ) : (
                    <img
                      src={tab.content.imageSrc}
                      alt={tab.content.imageAlt}
                      className="rounded-xl"
                    />
                  )}
                </TabsContent>
              ))}
            </div>
          </Tabs>
        )}
      </div>
    </section>
  );
};

export { Feature108 };
export type { Tab, Feature108Props };
