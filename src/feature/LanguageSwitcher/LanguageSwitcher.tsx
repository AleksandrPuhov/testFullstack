import { useState } from "react";
import { useRouter } from "next/router";
import { useLingui } from "@lingui/react";
import { Group, Menu, UnstyledButton } from "@mantine/core";
import languages, {
  type Languages,
  type LOCALES,
} from "translations/languages";
import { useStyles } from "./styles";
import { ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const router = useRouter();
  const { i18n } = useLingui();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });

  const [language, setLanguage] = useState<Languages>(
    () =>
      languages.find(
        (lang) => (lang.locale as LOCALES) === (router.locale! as LOCALES)
      )!
  );

  const handleChange = (language: Languages) => {
    setLanguage(language);

    void router.push(router.pathname, router.pathname, {
      locale: language.locale,
    });
  };

  const items = languages.map((language) => (
    <Menu.Item key={language.locale} onClick={() => handleChange(language)}>
      {i18n._(language.msg)}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            {/* <Image src={selected.image} width={22} height={22} /> */}
            <span className={classes.label}>{i18n._(language.msg)}</span>
          </Group>
          <ChevronDown size="1rem" className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
