document.addEventListener("DOMContentLoaded", event => {

    setTimeout(()=>{

        document.querySelector("#load-iframe-map").innerHTML = `
    
            <iframe 
                class="contact__iframe"
                frameborder="0" 
                scrollin="no" 
                marginheight="0"
                marginwidth="0"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.47826752331!2d-3.8443489207007677!3d40.43809861120072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1724222004933!5m2!1ses!2ses">
            </iframe>
    
        `;

    },500);

});