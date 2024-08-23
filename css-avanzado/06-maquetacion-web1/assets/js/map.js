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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50317.625296697675!2d-1.1683747789977206!3d37.980592869555835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381f8d5928c7f%3A0xd627129b38c4ab9a!2sMurcia!5e0!3m2!1ses!2ses!4v1724439719802!5m2!1ses!2ses">
            </iframe>
    
        `;

    },500);

});