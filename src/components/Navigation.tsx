'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// ナビゲーション項目の定義
const navItems = [
  { name: 'ホーム', href: '/', icon: '🏠', homeHash: '#top' },
  { name: 'プロフィール', href: '/profile', icon: '👤', homeHash: '#profile' },
  { name: 'サービス', href: '/services', icon: '🚀', homeHash: '#services' },
  { name: 'ニュース', href: '/news', icon: '📰', homeHash: '#news' },
  { name: 'ビジョン', href: '/future-vision', icon: '🔮', homeHash: '#vision' },
  { name: 'お問い合わせ', href: '/contact', icon: '✉️', homeHash: '#contact' },
];

// メニュースタイルの定義
const MENU_STYLES = {
  FULLSCREEN: 'fullscreen',
  DRAWER: 'drawer'
};

// NavLinkコンポーネント - 各ナビゲーションリンクを表示
const NavLink = memo(({ 
  href, 
  children, 
  onClick = () => {}, 
  isMobile = false,
  icon = null,
  menuStyle = MENU_STYLES.FULLSCREEN,
  homeHash
}: { 
  href: string; 
  children: React.ReactNode; 
  onClick?: () => void; 
  isMobile?: boolean;
  icon?: React.ReactNode | null;
  menuStyle?: string;
  homeHash?: string;
}) => {
  const pathname = usePathname();
  // アクティブ状態の判定を改善: ホームの場合は特別に判定
  const isHome = pathname === '/';
  const isActive = href === '/' ? isHome : pathname === href;
  
  // リンク先の決定（ホームページの場合はハッシュリンクを使用）
  const linkHref = isHome && homeHash ? homeHash : href;
  
  // フルスクリーンメニュースタイル
  if (menuStyle === MENU_STYLES.FULLSCREEN && isMobile) {
    return (
      <Link 
        href={linkHref} 
        className={`
          font-serif tracking-wider py-4 px-6 block w-full
          transition-all duration-500 rounded-lg relative overflow-hidden
          ${isActive 
            ? 'text-white bg-accent/30 shadow-lg shadow-accent/20' 
            : 'text-white hover:bg-white/10 hover:shadow-md'}
        `}
        onClick={onClick}
        aria-current={isActive ? 'page' : undefined}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl opacity-80">{icon}</span>
          <span className="text-xl">{children}</span>
        </div>
        {isActive && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/20"></div>
        )}
      </Link>
    );
  }
  
  // ドロワーメニュースタイル
  if (menuStyle === MENU_STYLES.DRAWER && isMobile) {
    return (
      <Link 
        href={linkHref} 
        className={`
          flex items-center gap-4 py-4 px-2 rounded-lg transition-all duration-300
          ${isActive 
            ? 'bg-accent/20 text-accent' 
            : 'text-white hover:bg-white/10 hover:text-accent'
          }
        `}
        onClick={onClick}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="text-xl">{icon}</span>
        <span className="text-lg">{children}</span>
      </Link>
    );
  }
  
  // デスクトップ用リンク
  return (
    <Link 
      href={linkHref} 
      className={`
        relative group transition-colors duration-300
        ${isActive ? 'text-accent' : 'text-white hover:text-accent'}
      `}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
      <span 
        className={`
          absolute left-0 bottom-0 h-0.5 bg-accent transition-all duration-300
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
        aria-hidden="true"
      />
    </Link>
  );
});

NavLink.displayName = 'NavLink';

// ハンバーガーボタンコンポーネント
const MenuButton = memo(({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      type="button"
      className={`
        md:hidden p-2 text-white rounded-full z-[60] transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50
        ${isOpen ? 'bg-accent/20' : 'hover:bg-white/10'}
      `}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {isOpen ? (
          <path d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
});

MenuButton.displayName = 'MenuButton';

// メインのNavigationコンポーネント
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuStyle, setMenuStyle] = useState(MENU_STYLES.FULLSCREEN); // デフォルトのメニュースタイルをフルスクリーンに変更
  const pathname = usePathname();
  const isHome = pathname === '/';

  // メニュー開閉のハンドラー
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // モバイルメニューを閉じるハンドラー
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // スクロールイベントのハンドラー
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期状態を設定

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // メニュー開閉時のbodyスクロール制御
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ルート変更時にメニューを閉じる
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // キーボードでのメニュー閉じる処理
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeMenu]);

  // フルスクリーンオーバーレイメニュー
  const renderFullscreenMenu = () => (
    <div 
      className={`
        fixed inset-0 z-[55]
        ${isOpen ? 'block' : 'hidden'}
      `}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0,10,30,0.97) 0%, rgba(0,0,0,0.98) 100%)',
        backdropFilter: 'blur(8px)',
        width: '100vw',
        height: '100vh',
        display: isOpen ? 'block' : 'none'
      }}
      aria-hidden={!isOpen}
    >
      {/* メニューヘッダー */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-white/20">
        <div className="text-xl font-serif font-bold tracking-wider flex items-center gap-3">
          <Image 
            src="/images/gcstudio-icon.jpeg"
            alt="GC Studio アイコン"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-accent/50"
          />
          <span className="text-white">GC Studio</span>
        </div>
        <button
          onClick={closeMenu}
          className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-full hover:bg-white/10 transition-all duration-300"
          aria-label="メニューを閉じる"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* メニュー項目 */}
      <nav className="container mx-auto px-4 pt-12 pb-6" aria-label="モバイルナビゲーション">
        <ul className="flex flex-col space-y-6 mx-auto">
          {navItems.map((item, index) => (
            <li 
              key={item.name} 
              className="transform bg-white/5 rounded-lg shadow-lg border border-white/10 overflow-hidden"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
              }}
            >
              <NavLink 
                href={item.href} 
                onClick={closeMenu} 
                isMobile={true}
                icon={item.icon}
                menuStyle={MENU_STYLES.FULLSCREEN}
                homeHash={item.homeHash}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  // サイドドロワーメニュー
  const renderDrawerMenu = () => (
    <>
      {/* オーバーレイ背景 - クリックで閉じる */}
      <div 
        className={`
          fixed inset-0 bg-black/60 z-40
          transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ドロワーコンテンツ */}
      <div 
        id="mobile-menu"
        className={`
          fixed top-0 bottom-0 right-0 w-72 max-w-[80vw]
          bg-gradient-to-bl from-dark-blue to-dark-blue/95 backdrop-blur-xl
          shadow-2xl z-50 overflow-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-hidden={!isOpen}
      >
        {/* メニューヘッダー */}
        <div className="p-6 border-b border-accent/20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/gcstudio-icon.jpeg"
              alt="GC Studio アイコン"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-serif font-bold text-lg text-white">メニュー</span>
          </div>
          <button
            onClick={closeMenu}
            className="text-white/80 hover:text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="メニューを閉じる"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* メニュー項目 */}
        <nav className="p-4" aria-label="モバイルナビゲーション">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li 
                key={item.name} 
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(50px)',
                  transitionDelay: isOpen ? `${index * 75 + 100}ms` : '0ms',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                <NavLink 
                  href={item.href} 
                  onClick={closeMenu} 
                  isMobile={true}
                  icon={item.icon}
                  menuStyle={MENU_STYLES.DRAWER}
                  homeHash={item.homeHash}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );

  return (
    <header 
      className={`
        fixed top-0 w-full z-[50] transition-all duration-300
        ${scrolled || isOpen 
          ? 'backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'}
      `}
      style={{
        backgroundColor: scrolled || isOpen ? 'rgba(0, 2, 8, 0.85)' : 'transparent',
        boxShadow: scrolled || isOpen ? '0 4px 30px rgba(0, 0, 0, 0.15)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* ロゴ部分 */}
        {isHome ? (
          <div className="text-xl md:text-2xl font-serif font-bold tracking-wider flex items-center gap-3">
            <Image 
              src="/images/gcstudio-icon.jpeg"
              alt="GC Studio アイコン"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">GC Studio</span>
          </div>
        ) : (
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-serif font-bold tracking-wider flex items-center gap-3"
            aria-label="ホームに戻る"
          >
            <Image 
              src="/images/gcstudio-icon.jpeg"
              alt="GC Studio アイコン"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-white hover:text-accent transition-colors duration-300 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">GC Studio</span>
          </Link>
        )}

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:block" aria-label="メインナビゲーション">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                <NavLink href={item.href} homeHash={item.homeHash}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* モバイルメニューボタン */}
        <MenuButton isOpen={isOpen} onClick={toggleMenu} />
      </div>

      {/* 選択したスタイルに応じたモバイルメニューの表示 */}
      {menuStyle === MENU_STYLES.FULLSCREEN 
        ? renderFullscreenMenu() 
        : renderDrawerMenu()
      }
    </header>
  );
}

export default memo(Navigation); 