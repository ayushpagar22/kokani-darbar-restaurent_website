// Menu data
const menuData = {
    popularItems: [
        {
            title: "Chicken Tandoori Masala",
            description: "Tender chicken marinated in yogurt and spices, grilled in tandoor with rich masala gravy",
            price: "₹280",
            image: "images/chicken-tandoori-masala.jpg",
            popular: true
        },
        {
            title: "Kashmiri Chicken Sizzler",
            description: "Juicy chicken pieces with colorful vegetables on a hot sizzling plate",
            price: "₹350",
            image: "images/kashmiri-chicken-sizzler.jpg",
            popular: true
        },
        {
            title: "Chikan Tandoori Chicken",
            description: "Authentic tandoori chicken with traditional spices and smoky flavor",
            price: "₹320",
            image: "images/chicken-tandoori-masala.jpg",
            popular: true
        },
        {
            title: "Chicken Biryani Rice",
            description: "Aromatic basmati rice with tender chicken pieces, cooked with saffron and traditional spices",
            price: "₹280",
            image: "images/chicken-biryani-rice.jpg",
            popular: true
        },
        {
            title: "Butter Scotch Falooda",
            description: "Creamy butterscotch flavored falooda with vermicelli, basil seeds and ice cream",
            price: "₹180",
            image: "images/butterscotch-falooda.jpg",
            popular: true
        },
        {
            title: "Custard",
            description: "Smooth and creamy custard dessert with vanilla flavor and fruit toppings",
            price: "₹120",
            image: "images/custard-dessert.jpg",
            popular: true
        }
    ],
    chickenSpecialties: [
        {
            title: "Chicken Tikka Masala",
            description: "Grilled chicken tikka in rich tomato-based creamy masala sauce",
            price: "₹300",
            image: "images/chicken-tikka-masala.jpg"
        },
        {
            title: "Chicken Lollipop",
            description: "Crispy chicken drumettes shaped like lollipops with spicy coating",
            price: "₹250",
            image: "images/chicken-lollipop.jpg"
        },
        {
            title: "Chicken Kashmiri Sizzler",
            description: "Chicken with Kashmiri spices served on a hot sizzling plate",
            price: "₹340",
            image: "images/chicken-kashmiri-sizzler.jpg"
        },
        {
            title: "Chicken Handi",
            description: "Traditional chicken curry cooked in clay pot with authentic spices",
            price: "₹290",
            image: "images/chicken-handi.jpg"
        },
        {
            title: "Chicken Lasooni",
            description: "Garlic-flavored chicken curry with rich and aromatic spices",
            price: "₹310",
            image: "images/chicken-lasooni.jpg"
        },
        {
            title: "Chicken Hakka Noodles",
            description: "Stir-fried noodles with chicken and vegetables in Indo-Chinese style",
            price: "₹220",
            image: "images/chicken-hakka-noodles.jpg"
        }
    ],
    muttonDelicacies: [
        {
            title: "Mutton Seekh Kebab",
            description: "Minced mutton grilled on skewers with aromatic spices",
            price: "₹380",
            image: "images/mutton-seekh-kebab.jpg"
        },
        {
            title: "Mutton Dragon",
            description: "Spicy mutton preparation with dragon sauce and vegetables",
            price: "₹420",
            image: "images/mutton-dragon.jpg"
        },
        {
            title: "Mutton Chapp Masala",
            description: "Tender mutton chops in rich and flavorful masala gravy",
            price: "₹450",
            image: "images/mutton-dragon.jpg"
        },
        {
            title: "Mutton Kheema",
            description: "Minced mutton cooked with peas and aromatic spices",
            price: "₹350",
            image: "images/mutton-kheema.jpg"
        }
    ],
    seafoodDesserts: [
        {
            title: "Prawns Curry",
            description: "Fresh prawns cooked in coconut-based curry with coastal spices",
            price: "₹400",
            image: "images/prawns-curry.jpg"
        },
        {
            title: "Chikan Kashmiri Sizzler",
            description: "Kashmiri-style chicken with vegetables on a hot sizzling plate",
            price: "₹360",
            image: "images/chikan-kashmiri-sizzler.jpg"
        },
        {
            title: "Firni",
            description: "Traditional rice pudding with cardamom, nuts and rose flavor",
            price: "₹140",
            image: "images/firni-dessert.jpg"
        }
    ]
};

// Function to create menu item HTML
function createMenuItem(item) {
    return `
        <div class="menu-item">
            <div class="relative overflow-hidden">
                <img src="${item.image}" alt="${item.title}" />
                <div class="price-tag">${item.price}</div>
                ${item.popular ? '<div class="popular-tag">Popular</div>' : ''}
            </div>
            <div class="content">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <button onclick="addToCart('${item.title}', '${item.price}')">Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to load menu items
function loadMenuItems() {
    const popularItemsContainer = document.getElementById('popular-items');
    const chickenSpecialtiesContainer = document.getElementById('chicken-specialties');
    const muttonDelicaciesContainer = document.getElementById('mutton-delicacies');
    const seafoodDessertsContainer = document.getElementById('seafood-desserts');

    if (popularItemsContainer) {
        popularItemsContainer.innerHTML = menuData.popularItems.map(createMenuItem).join('');
    }

    if (chickenSpecialtiesContainer) {
        chickenSpecialtiesContainer.innerHTML = menuData.chickenSpecialties.map(createMenuItem).join('');
    }

    if (muttonDelicaciesContainer) {
        muttonDelicaciesContainer.innerHTML = menuData.muttonDelicacies.map(createMenuItem).join('');
    }

    if (seafoodDessertsContainer) {
        seafoodDessertsContainer.innerHTML = menuData.seafoodDesserts.map(createMenuItem).join('');
    }
}

// Function to handle mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuBtn.innerHTML = '<i class="ri-close-line text-lg"></i>';
    } else {
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = '<i class="ri-menu-line text-lg"></i>';
    }
}

// Function to handle smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const menuBtn = document.getElementById('mobile-menu-btn');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuBtn.innerHTML = '<i class="ri-menu-line text-lg"></i>';
                }
            }
        });
    });
}

// Function to handle add to cart (placeholder)
function addToCart(itemName, price) {
    alert(`Added ${itemName} (${price}) to cart!\n\nThis is a demo function. In a real application, this would add the item to a shopping cart.`);
}

// Function to handle contact buttons
function setupContactButtons() {
    // Get directions button
    const directionsButtons = document.querySelectorAll('button:contains("Get Directions"), button:contains("Visit Our Restaurant"), button:contains("Visit Us")');
    directionsButtons.forEach(button => {
        if (button.textContent.includes('Get Directions') || 
            button.textContent.includes('Visit Our Restaurant') || 
            button.textContent.includes('Visit Us')) {
            button.addEventListener('click', function() {
                window.open('https://maps.google.com/?q=Behind+Rajjak+Manzil+Doodh+Bazar+Nashik', '_blank');
            });
        }
    });

    // Call button
    const callButtons = document.querySelectorAll('button:contains("Call:")');
    callButtons.forEach(button => {
        if (button.textContent.includes('Call:')) {
            button.addEventListener('click', function() {
                window.location.href = 'tel:09172314866';
            });
        }
    });
}

// Function to setup all button event listeners
function setupButtons() {
    // Mobile menu button
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Contact buttons with more specific selectors
    document.addEventListener('click', function(e) {
        const button = e.target.closest('button');
        if (!button) return;

        const buttonText = button.textContent.trim();
        
        if (buttonText.includes('Get Directions') || 
            buttonText.includes('Visit Our Restaurant') || 
            buttonText.includes('Visit Us')) {
            window.open('https://maps.google.com/?q=Behind+Rajjak+Manzil+Doodh+Bazar+Nashik', '_blank');
        } else if (buttonText.includes('Call:')) {
            window.location.href = 'tel:09172314866';
        } else if (buttonText.includes('View Menu')) {
            document.getElementById('menu').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Function to handle image loading errors
function setupImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace with a placeholder if image fails to load
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTIwSDIyNVYxODBIMTc1VjEyMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTE1MCAyMTBIMjUwVjI0MEgxNTBWMjEwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
            this.alt = 'Image not available';
        });
    });
}

// Function to add loading animation
function addLoadingAnimation() {
    // Add a simple fade-in effect to menu items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observe all menu items
    setTimeout(() => {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(item);
        });
    }, 100);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadMenuItems();
    setupSmoothScrolling();
    setupButtons();
    setupImageErrorHandling();
    addLoadingAnimation();
    
    // Add some interactive effects
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        // Add parallax effect to hero background
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = heroSection.querySelector('.hero-bg');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
});

// Add some utility functions for better UX
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Enhanced add to cart function
window.addToCart = function(itemName, price) {
    showNotification(`Added ${itemName} to cart!`, 'success');
    
    // You can add actual cart functionality here
    console.log(`Item added to cart: ${itemName} - ${price}`);
};

// Add scroll-to-top functionality
function addScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="ri-arrow-up-line"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #f97316;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addScrollToTop();
});

