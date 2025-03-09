const CONFIG = {
    personal: {
        name: 'Hayas Ismail',
        title: 'Backend Engineer & AI Enthusiast',
        tagline: 'Building robust backend systems and exploring AI frontiers',
        email: 'hayasnc@gmail.com',
        copyright: '© 2025 Hayas Ismail. All rights reserved.'
    },
    social: {
        github: {
            url: 'https://github.com/hayasnc',
            icon: 'fab fa-github',
            label: 'GitHub'
        },
        linkedin: {
            url: 'https://linkedin.com/hayasnc',
            icon: 'fab fa-linkedin',
            label: 'LinkedIn'
        },
        email: {
            url: 'mailto:hayasnc@gmail.com',
            icon: 'fas fa-envelope',
            label: 'Email'
        }
    },
    sections: {
        about: {
            title: 'About Me',
            content: `I'm a passionate Backend Engineer with a growing fascination for Artificial Intelligence. While my core expertise lies in building scalable server-side applications, robust APIs, and efficient database architectures, I'm actively exploring and integrating AI technologies into my work. I'm particularly interested in how AI can enhance backend systems and create more intelligent, adaptive solutions for modern applications.`
        },
        technologies: {
            title: 'Technologies',
            intro: 'Passionate about backend development and actively exploring the frontiers of AI technology.'
        }
    }
};

// Prevent accidental modifications to the configuration
Object.freeze(CONFIG);
Object.freeze(CONFIG.personal);
Object.freeze(CONFIG.social);
Object.freeze(CONFIG.sections);

export default CONFIG;
