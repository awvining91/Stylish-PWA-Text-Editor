//I updated the TODOs in this section

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    // This will store the event
    window.deferredPrompt = event;

    // This will remove the class that's hidden

    butInstall.classList.toggle('hidden', false);



});







// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    
    
    const clickEvents = window.deferredPrompt;
  
    if (!clickEvents) {
        return;
    }

    //This will show the prompt
    clickEvents.prompt();

  
    window.deferredPrompt = null;

    //This resets the prompt
    butInstall.classList.toggle('hidden', true);



});





// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

//This will clear the prompt
    console.log('The app is installed!!')
    window.deferredPrompt = null;






});