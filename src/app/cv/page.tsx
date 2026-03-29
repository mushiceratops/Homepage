import { CvSection } from "@/components/cv/CvSection";
import { PrintButton } from "@/components/cv/PrintButton";
import { education, career, awards, certifications, teaching } from "@/data/cv";

export const metadata = {
  title: "CV | Sohei Tsukahara",
};

export default function CvPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-serif text-3xl font-semibold">
          Curriculum Vitae
        </h1>
        <PrintButton />
      </div>
      <p className="text-sm text-text-sub mb-8">塚原 壮平 / Sohei Tsukahara</p>

      {/* Education */}
      <CvSection title="Education">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {education.map((edu, i) => (
              <tr key={i} className="border-b border-green-border last:border-0">
                <td className="py-3 pr-6 text-text-sub align-top w-44 shrink-0">
                  {edu.period}
                </td>
                <td className="py-3">
                  <div className="font-semibold">{edu.institution}</div>
                  {edu.department && (
                    <div className="text-text-sub text-xs mt-0.5">
                      {edu.department}
                      {edu.advisor && (
                        <span> ・ 指導教員：{edu.advisor}</span>
                      )}
                    </div>
                  )}
                  <div className="text-xs text-text-sub mt-0.5">{edu.degree}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CvSection>

      {/* Career */}
      <CvSection title="Career">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {career.map((c, i) => (
              <tr key={i} className="border-b border-green-border last:border-0">
                <td className="py-3 pr-6 text-text-sub align-top w-44 shrink-0">
                  {c.period}
                </td>
                <td className="py-3">
                  <div className="font-semibold">{c.company}</div>
                  {c.role && (
                    <div className="text-text-sub text-xs mt-0.5">{c.role}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CvSection>

      {/* Awards & Fellowships */}
      <CvSection title="Awards / Fellowships">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {awards.map((award, i) => (
              <tr key={i} className="border-b border-green-border last:border-0">
                <td className="py-3 pr-6 text-text-sub align-top w-44">
                  {award.year}
                </td>
                <td className="py-3">
                  <div className="font-semibold">{award.name}</div>
                  <div className="text-text-sub text-xs mt-0.5">
                    {award.organization}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CvSection>

      {/* Certifications */}
      <CvSection title="Certifications">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {certifications.map((cert, i) => (
              <tr key={i} className="border-b border-green-border last:border-0">
                <td className="py-3 pr-6 text-text-sub align-top w-44">
                  {cert.year}
                </td>
                <td className="py-3 font-semibold">{cert.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CvSection>

      {/* Teaching */}
      <CvSection title="Teaching">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {teaching.map((t, i) => (
              <tr key={i} className="border-b border-green-border last:border-0">
                <td className="py-3 pr-6 text-text-sub align-top w-44">
                  {t.period}
                </td>
                <td className="py-3">
                  <div className="font-semibold">{t.role}</div>
                  <div className="text-text-sub text-xs mt-0.5">
                    {t.institution}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CvSection>
    </>
  );
}
