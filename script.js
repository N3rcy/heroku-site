// Star Animation
function createStars(elementId, count, size, duration) {
    const element = document.getElementById(elementId);
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${duration + Math.random() * 3}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        element.appendChild(star);
    }
}

// List of channels (you'll need to replace these with actual channels from mlist)
const channels = [
    {
        name: "Heroku Chat",
        link: "https://t.me/heroku_chat"
    },
    {
        name: "Heroku Logs",
        link: "https://t.me/heroku_logs"
    },
    // Add more channels as needed
];

// Function to populate channels with animation
function populateChannels() {
    const channelsList = document.querySelector('.channels-list');
    
    channels.forEach((channel, index) => {
        const channelItem = document.createElement('div');
        channelItem.className = 'channel-item';
        channelItem.style.opacity = '0';
        channelItem.style.transform = 'translateY(20px)';
        
        const link = document.createElement('a');
        link.href = channel.link;
        link.target = '_blank';
        link.innerHTML = `<i class="fas fa-hashtag"></i>${channel.name}`;
        
        channelItem.appendChild(link);
        channelsList.appendChild(channelItem);

        // Animate channels appearing
        setTimeout(() => {
            channelItem.style.transition = 'all 0.5s ease';
            channelItem.style.opacity = '1';
            channelItem.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Platform Cards Animation
function initPlatformCards() {
    const cards = document.querySelectorAll('.platform-button');
    
    cards.forEach(card => {
        // Parallax effect on hover
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
        });
        
        // Reset transform on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Railway animation
function initRailwayAnimation() {
    const train = document.querySelector('.railway-card .train');
    if (train) {
        setInterval(() => {
            train.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                train.style.transition = 'none';
                train.style.transform = 'translateX(200%)';
                setTimeout(() => {
                    train.style.transition = 'transform 8s linear';
                    train.style.transform = 'translateX(-100%)';
                }, 50);
            }, 8000);
        }, 8100);
    }
}

// HikkaHost moon and stars animation
function initHikkaHostAnimation() {
    const stars = document.querySelectorAll('.hikkahost-card .star');
    stars.forEach((star, index) => {
        star.style.animationDelay = `${index * 0.3}s`;
    });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create different layers of stars
    createStars('stars', 50, 1, 3);
    createStars('stars2', 30, 2, 5);
    createStars('stars3', 15, 3, 7);
    
    populateChannels();
    
    initPlatformCards();
    initRailwayAnimation();
    initHikkaHostAnimation();
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
