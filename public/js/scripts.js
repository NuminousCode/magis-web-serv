/*!
* Start Bootstrap - Agency v7.0.4 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const formData = {
    firstName: '',
    email: '',
    phone: '',
    message: ''
};

const handleInputChange = (e) => {
    const { name, value } = e.target;
    formData[name] = value
};   

const validateForm = () => {
    const {firstName, email, phone, message} = formData;
    let errors = [];
    let errorMessage = ''
    const emailRegex = /\S+@\S+\.\S+/;
    const emailTest = emailRegex.test(email)
    
    if (!firstName) errors.push('Name');
    if (!email || !emailTest) errors.push(`Email formatted as 'user@example.com'`);
    if (!phone) errors.push('Phone');
    if (!message) errors.push('Message');
    if (errors.length > 0) {
        errorMessage = `Please add: ${errors.join(', ')}`;
        document.getElementById('submitErrorMessage').classList.remove('d-none');
        document.getElementById('submitErrorMessage').innerHTML = errorMessage;
        return false;
    }
    return true;
};

const fetchEnvVariables = async () => {
    try {
        const response = await fetch('https://env-variables.oracle942.workers.dev/');
        if (!response.ok) {
            throw new Error('Failed to fetch environment variables');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching environment variables:', error);
    }
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        try {
            const formDataToSend = new FormData(e.target);
            e.target.reset();
            document.getElementById('submitErrorMessage').classList.add('d-none');
            document.getElementById('submitSuccessMessage').classList.remove('d-none');
            setTimeout(() => {
                document.getElementById('submitSuccessMessage').classList.add('d-none');
            }, 5000);

            // const response = await fetch('/data');
            // console.log(response)
            // if (!response.ok) {
            //     console.log('Response not OK:', response.statusText);
            //     throw new Error('Failed to fetch data');
            // }
            // const data = await response.json();
            // console.log(data)
            // const { serviceId, templateId, publicKey } = data;
            
            const env = await fetchEnvVariables();
            // console.log(env)

            // const serviceId = 'service_unejne8';
            // const templateId = 'template_0mmtnxl';
            // const publicKey = 'qn0fZOYhWEb0Qr1Vl';
            
            const serviceId = env.serviceId;
            const templateId = env.templateId;
            const publicKey = env.publicKey;

            formDataToSend.append('service_id', serviceId);
            formDataToSend.append('template_id', templateId);
            formDataToSend.append('user_id', publicKey);

            const sendResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                method: 'POST',
                body: formDataToSend,
                
            });
            
            if (!sendResponse.ok) {
                throw new Error('Failed to send email');
            }
            
        } catch (error) {
            alert('Oops... ' + error.message);
        }
    }
}

