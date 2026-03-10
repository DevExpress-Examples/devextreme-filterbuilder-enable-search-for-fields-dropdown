using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models;
static class SampleData {
    public static List<SampleOrder> Orders = [
        new SampleOrder {
            Product_ID = 1,
            Product_Name = "HD Monitor",
            Product_Cost = 150.00m,
            Product_Sale_Price = 180.00m,
            Product_Retail_Price = 200.00m,
            Product_Current_Inventory = 25,
            Product_Category = "Electronics",
            Product_Brand = "TechBrand",
            Product_SKU = "TB-HDM-001",
            Product_Supplier = "TechSupplier Inc.",
            Product_Weight = 4.5m,
            Product_Created_Date = new DateTime(2023, 1, 10),
            Product_Last_Updated = DateTime.Now
        },
        new SampleOrder {
            Product_ID = 2,
            Product_Name = "Wireless Keyboard",
            Product_Cost = 30.00m,
            Product_Sale_Price = 45.00m,
            Product_Retail_Price = 50.00m,
            Product_Current_Inventory = 100,
            Product_Category = "Electronics",
            Product_Brand = "KeyBrand",
            Product_SKU = "KB-WL-002",
            Product_Supplier = "Keyboard Co.",
            Product_Weight = 0.8m,
            Product_Created_Date = new DateTime(2023, 2, 15),
            Product_Last_Updated = DateTime.Now
        },
        new SampleOrder {
            Product_ID = 3,
            Product_Name = "Gaming Chair",
            Product_Cost = 120.00m,
            Product_Sale_Price = 150.00m,
            Product_Retail_Price = 180.00m,
            Product_Current_Inventory = 10,
            Product_Category = "Furniture",
            Product_Brand = "ComfortSeats",
            Product_SKU = "CS-GC-003",
            Product_Supplier = "Furniture Supplier Ltd.",
            Product_Weight = 15.0m,
            Product_Created_Date = new DateTime(2023, 3, 5),
            Product_Last_Updated = DateTime.Now
        }
    ];
}
