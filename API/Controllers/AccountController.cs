using API.DTOs.User;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;
        public AccountController(UserManager<User> userManager, TokenService tokenService)
        { 
            _userManager= userManager;
            _tokenService= tokenService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>>Login(LoginDTO loginUser)
        {
            
            var user = await _userManager.FindByEmailAsync(loginUser.Email);
            if (user == null) { return Unauthorized(); }
            var results = await _userManager.CheckPasswordAsync(user, loginUser.Password);
            if (results)
            {
                return new UserDTO
                {
                    DisplayName = user.DisplayName,
                    Token = _tokenService.GenerateToken(user),
                    Username = user.UserName
                };
            }
            return Unauthorized();
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerUser)
        {


            var user = new User
            {
                DisplayName = registerUser.DisplayName,
                Email = registerUser.Email,
                UserName = registerUser.Username,
                About = registerUser.About,
            };
            var result = await _userManager.CreateAsync(user, registerUser.Password);
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return new UserDTO
            {
                DisplayName = registerUser.DisplayName,
                Token = _tokenService.GenerateToken(user),
                Username = registerUser.Username
            };

        }

        [HttpGet("me")]
        public async Task<ActionResult<UserDTO>> GetMe()
        {


            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return new UserDTO
            {
                DisplayName = user.DisplayName,
                Token = _tokenService.GenerateToken(user),
                Username = user.UserName
            };



        }
    }
}
