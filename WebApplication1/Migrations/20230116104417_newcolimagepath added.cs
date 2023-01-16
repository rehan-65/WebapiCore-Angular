using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiCoreLecture.Migrations
{
    public partial class newcolimagepathadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "imagepath",
                table: "TblEmployee",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "imagepath",
                table: "TblEmployee");
        }
    }
}
