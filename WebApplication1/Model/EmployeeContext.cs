using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiCoreLecture.Model
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {
        }
        public DbSet<TblEmployee> TblEmployee { get; set; }
        public DbSet<TblDesignation> TblDesignation { get; set; }
        public DbSet<Tblfile> Tblfile { get; set; }
    }
}
