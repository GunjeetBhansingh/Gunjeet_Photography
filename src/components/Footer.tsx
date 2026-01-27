const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-16 text-center border-t border-charcoal bg-slate-900">
            <div className="container max-w-[1400px] mx-auto px-8">
                <p className="text-white text-sm">
                    © {currentYear} LENS Photography. All rights reserved.
                </p>
                <p className="text-white text-xs mt-2">
                    Crafted with precision and passion
                </p>
            </div>
        </footer>
    )
}

export default Footer
