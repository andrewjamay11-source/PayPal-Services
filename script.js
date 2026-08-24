function sendMessage(e){
  e.preventDefault();
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const service=document.getElementById('service').value;
  const message=document.getElementById('message').value;
  const businessEmail='Talhasaidia445@gmail.com';
  const subject=encodeURIComponent('New inquiry - '+service);
  const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nService: '+service+'\n\n'+message);
  window.location.href='mailto:'+businessEmail+'?subject='+subject+'&body='+body;
}
