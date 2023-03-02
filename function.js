/**
 * Alert All
 */

let alert_msg_all = (alert_type, message) => {
    return `
    
        <p class="alert alert-${alert_type} alert-dismissible">
            ${message}
            <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
        </p>
    
    `;
};

/**
 * Email validation
 */

let emailValid = (data) => {
    let pattern = /^[a-z]{4,}@[a-z]{3,}\.[a-z]{2,}$/;
    return pattern.test(data);
};

/**
 * Phone validation
 */

let phoneValid = (data) => {
    let pattern = /^(\+8801|8801|01)[0-9]{9}$/;
    return pattern.test(data);
};


