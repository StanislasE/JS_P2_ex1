document.getElementById('butterfly').onmouseover = setNewImage ;
document.getElementById('butterfly').onmouseout = setOldImage ;

function setNewImage()
{
   document.getElementById('butterfly').src = '/Users/stan/Desktop/Exercices_JS/Partie_2/Exercice_1/ASSETS/Images/Chat-pap.jpg';
   document.getElementById('butterfly').alt = 'Chat qui chasse un papillon'          
}
function setOldImage()
{
   document.getElementById('butterfly').src = '/Users/stan/Desktop/Exercices_JS/Partie_2/Exercice_1/ASSETS/Images/Papillon.jpg';
}