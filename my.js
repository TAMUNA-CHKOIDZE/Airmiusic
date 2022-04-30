let faqs = document.querySelectorAll('.faq .faqDiv');
faqs.forEach(fa => {
    fa.onclick = () => {
        faqs.forEach(subFa => {subFa.classList.remove('active')});
        fa.classList.add('active');
    }
})





