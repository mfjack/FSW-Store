import { db } from "@/app/_lib/prisma";

interface ProductDetailsPageProps {
   params: {
      slug: string
   }
}

const ProductDetailsPage = async ({params: {slug}}: ProductDetailsPageProps) => {
   const product = await db.product.findFirst({
      where: {
         slug: slug
      }
   })

   return ( <h1>{product?.name}</h1> );
}
 
export default ProductDetailsPage;