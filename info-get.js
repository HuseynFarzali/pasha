const elements = document.querySelectorAll('*[info-get]');

elements.forEach(element => {
    element.addEventListener('click', e => {
        const button = e.target;
        const container = button.parentElement.previousElementSibling;

        // Check if the data element already exists for this button
        const dataElement = button.infoGetDataElement;

        if (!dataElement) {
            const newDataElement = document.createElement('div');
            newDataElement.setAttribute('info-get-data', 'true');
            newDataElement.innerHTML = '<span class="block text-[#202429] text-[16px] mb-[2px]">Sığortalayan şirkət:</span><h2 class="block mb-[12px]">Baku, Nizami, E.Suleymanov 51, apt. 17</h2>';
            container.appendChild(newDataElement);
            
            // Store the data element as a property of the button
            button.infoGetDataElement = newDataElement;
        } else {
            container.removeChild(dataElement);
            // Reset the reference property of the button
            button.infoGetDataElement = null;
        }
    });
});
