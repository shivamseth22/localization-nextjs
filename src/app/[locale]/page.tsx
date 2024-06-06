'use client'
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Index() {
  const [locale, setLocale] = useState("en"); // Assuming "en" is the default locale
  const t = useTranslations("Index");



  return (
    <div className="flex">
      <h1>{t("title")}</h1>
      <Link href={'en'} ><button >English</button></Link>
      <Link href={'hi'} ><button >Hindi</button></Link>
      <Link href={'tm'} ><button >Tamil</button></Link>
      {/* Add more buttons for other languages as needed */}
    </div>
  );
}
