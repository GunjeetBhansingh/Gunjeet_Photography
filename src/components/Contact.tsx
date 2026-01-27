import { useEffect, useRef } from 'react'

const Contact = () => {
    const contactRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (contactRef.current) {
            observer.observe(contactRef.current)
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current)
            }
        }
    }, [])

    return (
        <section id="contact" className="py-32 relative">
            <div className="container max-w-[1400px] mx-auto px-8">
                <div className="text-center mb-24 reveal">
                    <h2 className="text-4xl text-white md:text-5xl lg:text-6xl mb-8">Get in Touch</h2>
                    <p className="text-base md:text-lg text-white">
                        Let's create something extraordinary together
                    </p>
                </div>
                <div className="text-center max-w-[600px] mx-auto reveal" ref={contactRef}>
                    <p className="text-base md:text-lg text-white font-light leading-relaxed mb-4">
                        Available for commissioned work, collaborations, and fine art prints.
                        Whether you're looking for editorial photography, portrait sessions,
                        or custom artwork, I'd love to hear about your vision.
                    </p>
                    <div className="flex justify-center gap-8 mt-16 flex-wrap">
                        <a
                            href="mailto:hello@lens.photography"
                            className="px-8 py-4 bg-charcoal text-off-white no-underline rounded font-normal tracking-wider transition-all duration-normal border border-transparent hover:bg-transparent hover:border-white hover:text-white hover:-translate-y-1"
                        >
                            Email Me
                        </a>
                        <a
                            href="tel:+1234567890"
                            className="px-8 py-4 bg-charcoal text-off-white no-underline rounded font-normal tracking-wider transition-all duration-normal border border-transparent hover:bg-transparent hover:border-white hover:text-white hover:-translate-y-1"
                        >
                            Call
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-charcoal text-off-white no-underline rounded font-normal tracking-wider transition-all duration-normal border border-transparent hover:bg-transparent hover:border-white hover:text-white hover:-translate-y-1"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
