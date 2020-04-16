var sizebar1 = "%player_has_permission_protections.bar.1%";
var sizebar2 = "%player_has_permission_protections.bar.2%";
var sizebar3 = "%player_has_permission_protections.bar.3%";

function sizebar() {
   if (sizebar3 === "yes") {
       return "&a███";
   } else if (sizebar2 === "yes") {
       return "&a██&c█";
   } else if (sizebar1 === "yes") {
       return "&a█&c██";   
   } else {
       return "&c███";      
   }
}
sizebar();