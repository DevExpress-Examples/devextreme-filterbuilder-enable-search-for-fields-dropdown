using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models;
public class SampleOrder {
    public int Product_ID { get; set; }
    public string Product_Name { get; set; }
    public decimal Product_Cost { get; set; }
    public decimal Product_Sale_Price { get; set; }
    public decimal Product_Retail_Price { get; set; }
    public int Product_Current_Inventory { get; set; }
    public string Product_Category { get; set; }
    public string Product_Brand { get; set; }
    public string Product_SKU { get; set; }
    public string Product_Supplier { get; set; }
    public decimal Product_Weight { get; set; }
    public DateTime Product_Created_Date { get; set; }
    public DateTime Product_Last_Updated { get; set; }
}
