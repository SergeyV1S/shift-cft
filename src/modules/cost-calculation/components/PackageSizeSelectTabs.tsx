import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/ui/tabs";

import { ApproximatePackageSizesList } from "./ApproximatePackageSizesList";
import { ExactPackageSizesForm } from "./ExactPackageSizesForm";

export const PackageSizeSelectTabs = () => (
  <Tabs defaultValue='approximate' className='w-full'>
    <TabsList className='grid w-full grid-cols-2'>
      <TabsTrigger value='approximate'>Примерные</TabsTrigger>
      <TabsTrigger value='exact'>Точные</TabsTrigger>
    </TabsList>
    <TabsContent value='approximate'>
      <ApproximatePackageSizesList />
    </TabsContent>
    <TabsContent value='exact'>
      <ExactPackageSizesForm />
    </TabsContent>
  </Tabs>
);
