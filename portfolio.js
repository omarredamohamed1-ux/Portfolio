const openNavButton = document.querySelector("#open-navigation");
const closeNavButton = document.querySelector("#close-navigation");

// Open navigation menu
if (openNavButton) {
    openNavButton.addEventListener("click", () => {
        document.body.classList.add("show-mobile-menu");
    });
}

// Close navigation menu
if (closeNavButton) {
    closeNavButton.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
}

// Close menu when any nav link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});



const downloadLink = document.querySelector('.Download-CV');

if (downloadLink) {
    downloadLink.addEventListener('click', async (e) => {
        e.preventDefault();
        
        // استخدم المسار النسبي الموجود في الـ href
        const fileUrl = downloadLink.getAttribute('href'); 
        const filename = 'Omar_Reda_CV.pdf';

        try {
            const resp = await fetch(fileUrl);
            if (!resp.ok) throw new Error('File not found');
            
            const blob = await resp.blob();
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            
            
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Download error:', err);
            window.open(fileUrl, '_blank');
        }
    });
}