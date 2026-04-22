import { useProto } from '../context/ProtoContext';
import { FTG_GUIDE } from '../data/ftgGuide';
import { FTG_GUIDE_AR } from '../i18n/ftgGuideAr';

type FtgItem = {
  label: string;
  body?: string;
  subs?: string[];
};

function getFtgGuide(screenId: string, locale: string) {
  if (locale === 'ar-EG') {
    const ar = FTG_GUIDE_AR[screenId as keyof typeof FTG_GUIDE_AR];
    if (ar) return ar;
  }
  return FTG_GUIDE[screenId as keyof typeof FTG_GUIDE];
}

function StructuredItems({ items }: { items: FtgItem[] }) {
  return (
    <ul className="ftg-list ftg-list-structured">
      {items.map((item) => (
        <li key={item.label}>
          <span className="ftg-li-label">{item.label}</span>
          {item.body ? (
            <span className="ftg-li-body" dangerouslySetInnerHTML={{ __html: item.body }} />
          ) : null}
          {item.subs?.length ? (
            <ul className="ftg-sublist">
              {item.subs.map((s) => (
                <li key={s} dangerouslySetInnerHTML={{ __html: s }} />
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function FtgHandbookInner({ screenId }: { screenId: string }) {
  const { locale, t } = useProto();
  const g = getFtgGuide(screenId, locale);
  if (!g) return null;
  const intro = t('ftg.intro', 'Flutter · Supabase · feature-first clean architecture');
  const implLabel = t('ftg.impl_label', 'Implementation');
  return (
    <>
      <p className="ftg-tech-intro">{intro}</p>
      <div className="label mt-1 text-slate-600 dark:text-slate-400">{implLabel}</div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-2">
        <span className="font-semibold text-slate-600 dark:text-slate-300">{g.eyebrow}</span> · {g.title}
      </p>
      {'hint' in g && g.hint ? (
        <p className="ftg-guide-hint" dangerouslySetInnerHTML={{ __html: g.hint }} />
      ) : null}
      <StructuredItems items={g.items as FtgItem[]} />
      {'extraHtml' in g && g.extraHtml ? (
        <div className="ftg-extra-html" dangerouslySetInnerHTML={{ __html: g.extraHtml }} />
      ) : null}
    </>
  );
}

export function FtgHandbookSection({ screenId }: { screenId: string }) {
  const { locale, t } = useProto();
  const g = getFtgGuide(screenId, locale);
  const noEntry = t('ftg.no_entry', 'No handbook entry for this screen.');
  if (!g) {
    return <p className="text-sm text-slate-500 dark:text-slate-400 p-2">{noEntry}</p>;
  }
  return (
    <div className="ftg-handbook-inner ftg-tech-primary">
      <FtgHandbookInner screenId={screenId} />
    </div>
  );
}
