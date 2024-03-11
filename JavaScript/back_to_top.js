// Back To Top Button Script

document.addEventListener('DOMContentLoaded', function () 
{
    var backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function () {

        if (document.documentElement.scrollTop > 70) {
        backToTopButton.style.display = 'block';
        } 
        else {
        backToTopButton.style.display = 'none';
        }

    }
    );
    
    backToTopButton.addEventListener('click', function () {window.scrollTo({top:0,behavior:'smooth'}); });
}
);