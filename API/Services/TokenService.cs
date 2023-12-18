using Domain;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace API.Services
{
    public class TokenService
    {
        public string GenerateToken(User user )
        {
            var claims = new List<Claim>
            {
                new Claim (ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("QWxMYOOVZO6YN3r3Akq3gzMHRO54RkMP"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var descriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(30),
                SigningCredentials = creds
            };

            var handler = new JwtSecurityTokenHandler();
            var createingToken = handler.CreateToken(descriptor);
            var token = handler.WriteToken(createingToken);
            return token;
        }
    }
}
