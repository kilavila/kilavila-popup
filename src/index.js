export default function _kilavilaPopup(
    style,
    title,
    message,
    duration,
    dismissible
) {
    let container = document.querySelector('.kilavila-popup-container');

    if (!container) {
        let newContainer = document.createElement('div');
        newContainer.className = 'kilavila-popup-container';
        document.appendChild(newContainer);
        createPopup(
            newContainer,
            style,
            title,
            message,
            duration,
            dismissible
        );
    } else {
        createPopup(
            container,
            style,
            title,
            message,
            duration,
            dismissible
        );
    }
}

function createPopup(
    container,
    style,
    title,
    message,
    duration,
    dismissible
) {
    let newCard = document.createElement('div');

    let id = Math.floor(Math.random() * (9999 - 1111) + 1111);

    switch (style) {

        case 'default':
            newCard.className = `kilavila-popup-card kilavila-popup-default kp-${id}`;
            break;

        case 'info':
            newCard.className = `kilavila-popup-card kilavila-popup-information kp-${id}`;
            break;

        case 'success':
            newCard.className = `kilavila-popup-card kilavila-popup-success kp-${id}`;
            break;

        case 'error':
            newCard.className = `kilavila-popup-card kilavila-popup-error kp-${id}`;
            break;

        case 'warning':
            newCard.className = `kilavila-popup-card kilavila-popup-warning kp-${id}`;
            break;
    
        default:
            newCard.className = `kilavila-popup-card kilavila-popup-default kp-${id}`;
            break;

    }

    newCard.innerHTML = `
        <span style="font-size: 20px;">
            ${title}
        </span>
        <span style="font-size: 12px;">
            ${message}
        </span>
    `;

    container.append(newCard);

    let card = document.querySelector(`.kp-${id}`);
    card.classList.add('active');

    if (dismissible) {
        card.classList.add('clickable');
        card.addEventListener('pointerdown', () => {
            removePopup(card);
        });
    }

    setTimeout(() => removePopup(card), duration);
}

function removePopup(card) {
    card.remove();
}