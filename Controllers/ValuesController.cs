using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NetInventory.Controllers
{

    /*
      Building our models
    */
    public class Inventory
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
    }

    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        //[HttpPost]
        // public void Post([FromBody]string value)
        // {
        // }

        // POST api/values
        [HttpPost]
        public IActionResult Index([FromBody] Inventory inventory)
        {
            if(inventory.Name == "test"){
                inventory.Name = "Changed it from back here!";
            }

             return Json(inventory);   
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
