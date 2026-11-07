import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

// GET /api/products/flash-deals
export const getFlashDeals = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    where: { stock: { gt: 0 } },
    orderBy: { originalPrice: "desc" },
  });
  const productWithDiscount = products.map((p: any) => {
    const discount =
      p.originalPrice && p.price
        ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
        : 0;
    return { ...p, discount };
  });
  res.json({ products: productWithDiscount.slice(0, 8) });
};
//  GET /api/products

// GET /api/products

// GET /api/products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const {
      category,
      search,
      minPrice,
      maxPrice,
      sort,
      limit,
    } = req.query;

    const where: any = {};

    if (category && category !== "all") {
      where.category = category as string;
    }

    if (search) {
      where.name = {
        contains: search as string,
        mode: "insensitive",
      };
    }

    if (minPrice || maxPrice) {
      where.price = {};

      if (minPrice) where.price.gte = Number(minPrice);
      if (maxPrice) where.price.lte = Number(maxPrice);
    }

    let orderBy: any = { createdAt: "desc" };

    if (sort === "price-low") {
      orderBy = { price: "asc" };
    } else if (sort === "price-high") {
      orderBy = { price: "desc" };
    } else if (sort === "rating") {
      orderBy = { rating: "desc" };
    } else if (sort === "newest") {
      orderBy = { createdAt: "desc" };
    }

    const products = await prisma.product.findMany({
      where,
      orderBy,
      ...(limit && {
        take: Math.min(Math.max(Number(limit) || 8, 1), 100),
      }),
    });

    const productWithDiscount = products.map((p) => {
      const discount =
        p.originalPrice && p.originalPrice > 0
          ? Math.round(
              ((p.originalPrice - p.price) / p.originalPrice) * 100
            )
          : 0;

      return {
        ...p,
        discount,
      };
    });

    return res.json({
      products: productWithDiscount,
    });
  } catch (error) {
    console.error("Get products error:", error);

    return res.status(500).json({
      message: "Failed to fetch products",
    });
  }
};


// GET /api/products.:id   =>individual products
export const getProduct = async (req: Request, res: Response) => {
  const product = await prisma.product.findUnique({
    where: { id: req.params.id  as string},
  });
  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }
  const discount =
    product.originalPrice && product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : 0;
  res.json({ ...product, discount });
};

// POST /api/products =>creating products
export const createProduct=async (req:Request,res:Response) => {
    const product=await prisma.product.create({data:req.body})
    res.status(201).json({product})
    
}
// PUT /api/products/:idb=>product update 
export const updateProduct=async (req:Request,res:Response) => {
    const product=await prisma.product.update({where:{id:req.params.id as string},data:req.body})
    res.status(201).json({product});
    
}
// DELETE /api/products/:id
export const deleteProducts=async (req:Request,res:Response) => {
    await prisma.product.delete({where:{id :req.params.id as string}})
    res.json({message:"Deleted"})
    
}