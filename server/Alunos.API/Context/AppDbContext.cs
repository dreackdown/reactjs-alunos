using Alunos.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Alunos.API.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Aluno> Alunos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aluno>().HasData(
                new Aluno
                {
                    Id = 1,
                    Nome = "Hugo Faria Lima",
                    Email = "hugofaria157@live.com",
                    Idade = 24
                },
                new Aluno
                {
                    Id = 2,
                    Nome = "Eduardo Takeushi",
                    Email = "eduardotk@gmail.com",
                    Idade = 23
                }
            );
        }
    }
}
