﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Core.DAL_Core;
using DAL.Core.GenericRepository;
using DAL.Core.GenericRepositoryModel.Interfaces;

namespace DAL.Core.GenericRepositoryModel.Repository
{
   public class ProductDAL : GenericRepository<Product>, IProductDAL
   {
       public ProductDAL(IDbFactory dbFactory) : base(dbFactory)
       {
       }
   }
}
