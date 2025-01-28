import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/ui/tabs";

import { ApproximatePackageSizesList } from "./ApproximatePackageSizesList";
import { ExactPackageSizesForm } from "./ExactPackageSizesForm";

export const PackageSizeSelectTabs = () => (
  <Tabs defaultValue='approximate' className='w-full'>
    <TabsList className='grid w-full grid-cols-2'>
      <TabsTrigger value='approximate'>Примерные</TabsTrigger>
      <TabsTrigger value='exact'>Точные</TabsTrigger>
    </TabsList>
    <TabsContent value='approximate' className='px-4 py-2'>
      <ApproximatePackageSizesList />
    </TabsContent>
    <TabsContent value='exact' className='px-4 py-2'>
      <ExactPackageSizesForm />
    </TabsContent>
  </Tabs>
);
