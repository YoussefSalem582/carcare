import type { ReactNode } from 'react';
import { FtgHandbookSection } from './components/FtgHandbook';
import { SpecAside } from './components/SpecAside';
import { ProtoIcon } from './components/proto/Icon';
import { ProtoProvider, useProto } from './context/ProtoContext';
import { SCREENS } from './data/screens';
import { PHONE_SCREENS } from './screens/phoneRegistry';

function PhoneStage() {
  const { surface, currentScreen } = useProto();
  if (surface === 'flutterGuide') return null;
  const Cmp = PHONE_SCREENS[currentScreen];
  if (!Cmp) {
    return (
      <div className="p-4 text-sm text-slate-600 dark:text-slate-400">
        Missing screen component: <span className="font-mono">{currentScreen}</span>
      </div>
    );
  }
  return <Cmp />;
}

function Shell() {
  const {
    surface,
    currentScreen,
    switchSurface,
    show,
    toggleTheme,
    locale,
    setLocale,
    t,
    tGroup,
    catalogField,
  } = useProto();

  const screenList = SCREENS[surface === 'flutterGuide' ? 'flutterGuide' : surface === 'b2b' ? 'b2b' : 'b2c'];

  const inactiveTab = 'px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap';
  const activeTab = 'px-3 py-2 rounded-lg text-sm font-semibold tab-active whitespace-nowrap';

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-8 proto-shell">
      <header className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md ring-1 ring-black/5 dark:ring-white/10 shrink-0"
            style={{ background: 'var(--brand)', color: 'white' }}
          >
            <ProtoIcon name="wrench" className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div id="shellTitle" className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 truncate">
              {t('shell.title', 'CarCare — MVP UI/UX Prototype')}
            </div>
            <div id="shellSubtitle" className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {t('shell.subtitle', 'Map-first maintenance marketplace · B2C + B2B · Flutter team handbook')}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <div className="flex items-center gap-1 rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 p-1 shadow-sm">
            <button
              type="button"
              id="protoLocaleEn"
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${locale === 'en' ? 'tab-active' : 'text-slate-600 dark:text-slate-400'}`}
              title="English"
              onClick={() => setLocale('en')}
            >
              EN
            </button>
            <button
              type="button"
              id="protoLocaleAr"
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${locale === 'ar-EG' ? 'tab-active' : 'text-slate-600 dark:text-slate-400'}`}
              title="العربية (مصر)"
              onClick={() => setLocale('ar-EG')}
            >
              عربي
            </button>
          </div>
          <button
            type="button"
            id="protoThemeToggle"
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 shadow-sm tap"
            aria-label={t('a11y.theme_toggle', 'Toggle light or dark theme')}
            onClick={toggleTheme}
          >
            <ProtoIcon name="sun" className="w-5 h-5 dark:hidden text-amber-500" />
            <ProtoIcon name="moon" className="w-5 h-5 hidden dark:inline text-slate-300" />
          </button>
          <div className="flex flex-wrap items-center justify-end gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-2xl p-1 border border-slate-200/80 dark:border-slate-700 shadow-sm max-w-xl">
            <button
              type="button"
              id="toggleB2C"
              className={surface === 'b2c' ? activeTab : inactiveTab}
              onClick={() => switchSurface('b2c')}
            >
              {t('shell.tab_b2c', 'B2C — Car Owner')}
            </button>
            <button
              type="button"
              id="toggleB2B"
              className={surface === 'b2b' ? activeTab : inactiveTab}
              onClick={() => switchSurface('b2b')}
            >
              {t('shell.tab_b2b', 'B2B — Service Center')}
            </button>
            <button
              type="button"
              id="toggleFlutterGuide"
              className={surface === 'flutterGuide' ? activeTab : inactiveTab}
              onClick={() => switchSurface('flutterGuide')}
            >
              {t('shell.tab_ftg', 'Flutter Team Guide')}
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[260px_1fr] gap-5">
        <aside className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-700 p-4 shadow-sm shadow-slate-200/50 dark:shadow-none h-fit sticky top-4">
          <div id="shellScreensLabel" className="label mb-2 text-slate-600 dark:text-slate-400">
            {t('shell.screens', 'Screens')}
          </div>
          <div id="screenList" className="screen-list flex flex-col gap-1">
            {(() => {
              let lastGroup: string | null = null;
              let firstSection = true;
              const parts: ReactNode[] = [];
              for (const s of screenList) {
                const g = s.group || 'Screens';
                if (g !== lastGroup) {
                  parts.push(
                    <div
                      key={`g-${g}`}
                      className={`screen-group-label label mb-1.5 px-0.5 ${firstSection ? '' : 'mt-4'}`}
                    >
                      {tGroup(g)}
                    </div>,
                  );
                  firstSection = false;
                  lastGroup = g;
                }
                const nm = catalogField(s, 'name');
                parts.push(
                  <button
                    key={s.id}
                    type="button"
                    className={`screen-btn ${s.id === currentScreen ? 'active' : ''} text-left text-sm px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between w-full border-0 bg-transparent font-[inherit] cursor-pointer`}
                    onClick={() => show(s.id)}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        className="dot flex-shrink-0"
                        style={{ background: s.phase === 1 ? '#10B981' : '#F59E0B' }}
                      />
                      <span className="truncate">{nm}</span>
                    </span>
                  </button>,
                );
              }
              return parts;
            })()}
          </div>
          <div className="divider my-4 dark:bg-slate-700" />
          <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            <div className="flex items-center gap-2 mb-1">
              <span className="dot" style={{ background: '#10B981' }} />
              <span id="shellLegendMvp">{t('shell.legend_mvp', 'MVP scope (Phase 1)')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="dot" style={{ background: '#F59E0B' }} />
              <span id="shellLegendP2">{t('shell.legend_p2', 'Phase 2 — retention layer')}</span>
            </div>
          </div>
        </aside>

        <main className="flex items-start justify-center pt-4 pb-10 w-full min-w-0" style={{ minHeight: 900 }}>
          <div
            id="b2cLayout"
            className="proto-pair-layout ftg-main-layout w-full max-w-full min-w-0 px-1"
            hidden={surface !== 'b2c'}
          >
            <div id="b2cStage" className="phone-frame flex-shrink-0">
              {surface === 'b2c' ? <PhoneStage /> : null}
            </div>
            <aside
              id="b2cDetailAside"
              className="ftg-handbook-aside proto-detail-aside dark:border-slate-700"
              aria-label="Screen spec"
            >
              <SpecAside surface="b2c" screenId={currentScreen} />
            </aside>
          </div>

          <div
            id="b2bLayout"
            className="proto-pair-layout ftg-main-layout w-full max-w-full min-w-0 px-1"
            hidden={surface !== 'b2b'}
          >
            <div id="b2bStage" className="phone-frame flex-shrink-0">
              {surface === 'b2b' ? <PhoneStage /> : null}
            </div>
            <aside
              id="b2bDetailAside"
              className="ftg-handbook-aside proto-detail-aside dark:border-slate-700"
              aria-label="Screen spec"
            >
              <SpecAside surface="b2b" screenId={currentScreen} />
            </aside>
          </div>

          <div
            id="ftgLayout"
            className="ftg-guide-layout ftg-main-layout w-full max-w-full min-w-0 px-1"
            hidden={surface !== 'flutterGuide'}
          >
            <aside
              id="ftgHandbookAside"
              className="ftg-handbook-aside proto-detail-aside ftg-guide-full mx-auto dark:border-slate-700"
              aria-label="Flutter Team Guide — technical handbook"
            >
              {surface === 'flutterGuide' ? (
                <>
                  <FtgHandbookSection screenId={currentScreen} />
                  <div className="divider my-5" />
                  <SpecAside surface="flutterGuide" screenId={currentScreen} />
                </>
              ) : null}
            </aside>
          </div>
        </main>
      </div>

      <footer id="shellFooter" className="mt-12 text-xs text-slate-500 dark:text-slate-400 text-center pb-8">
        {t(
          'shell.footer',
          'Built for developer handoff. Flutter target — layouts translate to Material/Cupertino widgets. Mock data is illustrative.',
        )}
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ProtoProvider>
      <Shell />
    </ProtoProvider>
  );
}
