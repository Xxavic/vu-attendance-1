// ============================================================
// VUSAP — App Data Layer & State
// ============================================================

// Official Victoria University shield logo, embedded as a data URI so it
// renders identically whether this app is served from a single file or
// deployed as the full multi-file PWA structure.
const VU_LOGO_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACeCAMAAACCYfHCAAAAflBMVEUAAAAub7DcKCzb2dvw8PCura7m5efm4OHbp6nLWF1GdaC3LTK0tLSu0uRfi6uYtMm0WVx+fn7qs7hBcJDLdoGGpse0q6vRvcJxo8e3srO0OkO48vPgwrzEusIsccGwsO4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvYvAcAAAAIHRSTlMA/v7zE/pioPX+/v0F9f77/gKclve7qPr9XP0G+V3+CCfIvigAABF4SURBVHja7Z2JduK4EoaVlCwJr8B0A1mm8/5veeuvkmwZGzCGdM+5p3Vm6SQQPteu0tLGrBzW7vBfdyhmBnlnjdntrPkzw9b1FToh5OHkMepnQlpjb0jNQC61/NkV1wdRQQ6C5KexNvuMR/jAMBr5z/CVysNafyhuDyZUXfe/92H5zf6K+M2ICLpi+WBVe1/rr9jpZ6Tf+mHtWB67W4D8tC5/Qz3wyrutc+626LoJ4yckqRK8bpJXJVwbRx2Nh/f6jLUBuXeHYu3ooG62SEZw+uT8tN6zBWTDu2uI1ngqAh2PIDsYvNMyVi2Kxe8qHhgqVQjARZtkRv6l5kwiZncDEDadjDnZint7iG3Gt32iFN+pGfRwYDoW801Al9sCv/fN36HVdtnLPgPDBM/iy12SNV4skGBd16JZfvehoOP94mFdhrDIt2X8ZE64zxc8ehEgvIHwLriIuz2884MFufyLq8MnJ4xDQtgyQLP8Uyafyk9Ea99rlwF+MWDYrh3Btf0oebTXxtnPydrjAkAOT7R9XTmqjStf1g6i3wD4Yz1gyYBhIeDmTwC+/A7A1/93QPoL+BfwjwL6/zqgM/9/gFX1Xg3jLCjPfXcOsPw2wE3A+AxxjOS6CcOYBWwbDJQpjY6BBN/vf3Z6BHATUAVx/crlVzDngCiQ8IPNvAS5PmEGqX2p4y8GQP6i05KwyL8tgMWdKt4GbV/QdqLh9x/8I3f2gzMVN3jzh2/NRJ8tl46mnar4TkA2tCDT2VDNVAY8q2C+azbYypubmdKl/MlT3JfHAVmXomSaBWT9Vle9uCTMgru54oqVXK4F9CNrC4RWx0zkeYdhvt4C5PfOAb7MACKT3ATs+JHHNBuRwoyON0Sb6kYcxHu/G3AbMOEK2zkNb19vAn6/BKuApsw0u2ynFjgFbH4D4KthN/H+HGZWgDOAi1VcNn4lILsJy+GcZvs5I8BHJFg2bi0g3MSduUkFF3n9BgnaFYCvsELrt2cangveDwEukuA0DkKE3tiPsQjZRX68Ph0Qn39l4eLyxD2wAMffDrMafiQOQsVvWLmwKwpWtkJb5yLc0KyG/xjgNnjOJvSeA25f/0OAlQAOtvk+7yJ/DpDrUzT7eygucTavTwZEJlkPiEjDOt5cjTEPA5oHADdcdLmU77b0hwHn7D9w9Z48I/hLM9PzerD5bRKUSOMoqE9fEuBUgu4OQK+AH/enuujILlbW82l4HtDb+ZKfAZtpye8WAdp5D93yExqIDi7yvhAQ0zrfPBlwXoIQ4YfFNG47U+pfzsXuAiDP3V+eCyhVl2URsgC3S3szDc9+PS0EhIYeAeRZHPtJuBxjZgBP8lDlbE+/m/QHVYL1WkCd33nyfrO4u9WiP0LtFLClyXefAehlFfqyACeAmLnbOTduJj7yBMAqSJ/migCn7bcO3aOpjtuphhcCmmsNzC1mT/b4fgcgcslUhMw3hb4D8JKTYors/I/qng5ri1A9Tiboy8zY5RMkCBHmZettwF8iLc8ffCpTX0t6g+3LtwC+h2sxZh4Qnoxhmq7rm67ly/cAXkvDV5ro2OohC/OyjE9Ne2GdZAngjS5/Fa4K8GKXv1Xp8eja8uJCzhMAX81DyxBleXWl6RmAa9dJfi1ZCvuTgAuA/1uAM+pv7F/Av4AMSH8B/wJ+H6BZAtjY6yXz9+3dQgvYcay+DWg8llirFeO1KjzSbblq8LSTAd9uAH7KutfqsXfdT2N+rhrYJEp0CxALcx+0enDVt98bs18xsO+WAc1tCVrfrjSksixou1k5tqLi47+3vdj4dvXWkn8e2NpHmPAsAbQPAJ4eAlwowdleysLRPbB7E3sP6GiWAK6WYGkekaDDUQLzrRIsjX8EcIkXP6jih5xEGpjrbbDkqWPX3pj+/POwBFcBgq2RafdqwOo24JFWS7DBHngrSx7l9e1sU8CqQug2G9lCVRlsStvMtrg1zKwCRKM5nvxwTfPSUoNUU94CZChmYyCcQSAKYfuODWnS/ZDddMz9FBtsme9Dz0cZrIlL+4ea2QZQBojVAJyP8Cx9ksMVQXK1k5NCTk4l5KJcDVh26aARFjyxkQsHs9zQQStbcZ9yDLhBtz0eW2IhFoFwtIP/F/jffx26hs7nmxLXAmKLfXa8x+jJrh0TCmB7alIl0+aAFQBZSqagsCeRIrH499LlOh5xSAwbrrJe1FrAzk+P632YL+t991Ke0K86taBkebTnEgQHjsLB5EhOxDlYJMWzVnuXL/qtBGz99BAgv+SLX4Vtnn1h1hoR6QBogiE5sMOmF94MTtbhz3syh0PBhS2E6mcA780kHV0672j9KGcXNAYMDHgoCthfPD6HWsCRnDHibx6Lg/fh+Digtx+zZymZ2l8H3HocXHLe7AM4A94RDkQFTqSib+3nbNDcreJZAcrRO4dI8yv20gpZexucJISCtbiX43JYG/B71KN7y0L0cGr/rwB+PgrY+Csr4Pn6R3fmxQAMwEPIw3TKikUGc9CgeDwcAlxmADyuBEznFO30nK8ZlotKXbzMVaz7Dr2kEuSOvYCy87L8DLrqYouPArZkRxEwf7XstWpPkp9PWkeMnIQ/vwjFXvwVu6ahaD0Rx4wcrs0zJMhe4pTMTl8OEXlZ1CpFlmPAgOAMD97LQUWZ7QQcWzxq/PF+DBj8KsASdZYz8vuGlNJHxF0tuk074ccq9sYf9fwzdt4FKNxLZAyFfHOs4iCTJnd3Lm6lEvTEFaE7d2iLTQIsuy5VDmMJfrLhgQhuq8cwfUSj/YHDNyT4PgZc1N3yp/NVmNOpLU3ZzBxP9p7Z2n7taABkMcHmcCYXToKkYd0n/9kfUNcwI5twDqgT9zPAc7OPE/fZfSRl16GFtxsYd9ja2uV8Y0B8fkCpIGUXf7QoWAuHIE5yHAG6CWDNJY+xY0DOvXOb79kWT+wKWjkMxQ0iYcaXxUHEYifdGtLTvCS7v+To7h7bisnXlp9gO2g4AuaXOdhRMwln3AVwZmIMPjiMy4TPTtOO+QbAdwAi/NFRy1SvTsL/d36PHA3XY8BNlkjOt0YBKJco/KPwOADSzvIBZvBjlrdl/Z5Ga5c94BaAWu57tz9o3Q8nOeBsAKMjBdoBsNoQy8sXOWDNubGg3OzlFcBs5vl+vTD/Rzr5zjVhwXxlvrA1AsRSO3tHATr/Vkis2ZMWh3oWPwPEFkpDOaDIi0aA2sVmyz/Tcdkf7Glp9Oru1F2Yk2zIBExCOB17vbHASf0iRQauamC7fMsB8bkAGixcBViMJGjcZ0NWY1s+rWtG5y/iDIVf15wuTZq2APRyGYDVk+ZIPHqThFMH4NzHUbF/ICtAvjc54U2AQ7TBM+AU0ijbDRM4LrCdjZUCAGXKNANYQcVwA6vBEHkPQ+abQW8xgHGmZhM0nARoe2l1xZkE8Zl09DiF3+U9vzbbBmOGdIJXlWV+3itX8VaKmH1I59HF8AqTvkBKJp63bPoNL5hFkK0zCyTcHxHF0U8sqUPVke3FKXOXachEK2Fngam2401iOWAC03KLPvubASDG9FMFxOZE8W3H0d/ppSdWbsYQCULaZhcJ5Y4Ym4mwyz2G6X0vQA4w5dkOkwwwb/5rE5oneugmyGE9EH/iQgiZu2+gNdGw1a3yVjr+A6ClWDjv5GXODBVDO5JQKwWDVVmXItKRuQ6AOsxkj0NaU9Fmu5GZ+3tgHuO4oIgalghNRQJE/EMS64tQj9tMmiSz7mw3dro1B+G8pXHMHHJxtaznVqmC8dkMZPUsBLZ7eQXsSMXhNEKyfCX4QJ7uNLfPr+2noZZO001iq/qDW/lsXISi+q2hRvsWAVVwdaE/hQgdHBkvbF8mIio7UTFbjNea5zTuIa0BrHDiB3UE9QEMGS6q2A33uBBipJUZOfUnCmF0Xdp2JQdKkesgZyqf02HlLOw0BqofICUDVgCx6dPDJmU6LVE8Powknk5UyjVp0badtmGSji+cVFoBuKVYiFGaPQKtk6goxQ2mKfZAQltnTxB7G1262aSRsqWUQzbGzm/tXQG4/ZSzKkOZsOOCWVSLcAxar0pXfdfqQ76Q55FwLbLLdlx1qJuoeVITXU7tidHF268iTIw41mmFmAwyCTlZhJ1po7Yizid1+aWOZjM79mVMhKGDxmoFsXbwmN4M9AfdDGF7eY/YnYDiIL1JxQT1poBGUwl+woo9yDet60sVL7eiOTu/Ef9J6yTVxhMnL997MEKgUcB0SRXmIPoMAphUL6kaXSlH3fcByr5n1ZbtDTBKkOJFVeK5yTAhOB/7HCh2ZBO0774JkGtGLzvHk3dqCk4BMN0SaGxfXXu5FsnreoOJlmHukuEdgLC/+Cler1vrZxznfFajs9ckGONRIoQrNeXzAXE41EQ+06c4dl6dnasFMrpm5/7eQaF3fb2iduhdVz4bEPElyS9eyVfbmME4dyFzkNavqY9WC9VO7dJmMpRasmmfChivR3BYqHAmOYgWBKlF//bGT6A37ZHr7y60UbD9vC3e07bUEJcBVpvglE84bXIQEc4udUqHHosjN8yLY2zc5YQWV5ktUvMiwKheh4lfiru7OiYLdKdsXbNCye3qfsUj3rlX+zwpq5aLAo1BLgCXqHkJ4LvMkCw1UkzFSWIdI11h6ni/ZjbDk1ApukwS7NceNI7qdJUWbFdZALgJGrxENXLtIn55bUQ2XaHXRL6hhsq6aH3UsUN6sbna5XfpwshjgO8/SDsDupzYr6IaU2h8Vleh3lVz08PPfax1vM0J1RCnPZF7ASvcvyLzMmkX1kNv3lotB1wsEQryo87lQKgvs5KF4lWQUSGsmQ9P1y3xKiCCi5felFZOvYCwuBvLgSGFjG5Y1TcVKQdq/uh/BTxfBC9V7lXEK4A8E07a1V/Vd7GMzHpHKTjvcmWNECXXPjHKfJtaTZrTCxXrtYhzedeH2XxCKk6a6s4OfVPp65L23gYxnV+GGstXkpe6FABTPEQe0vJGnIVfdAnxEqAYn1pzkVlPXxxrWc8TyMg3XU5Q0RzkqkdJzJ7GD4KrJ2UJXbo87C3l4mln9b7RDrAuSfQZzKQ5ZFHsdPkAQupECrsLt+k6bSylsKTthtTRFy+O4QHJb2Yf5AygCI+imeP5XP7panpFLwQseuO22/mLkjndULyz1/Y5JT2NZMjexI1DE3GCeA5YAQ/JHNmqSPc/Z11yO0zXrF5ye/2+XSsrG7VVFRepFhrpORZCIsamay8DVoIn00qfjK8e3/ocb4wm3yddu7NXL9uVvjX/4/rWiOvzSmy8Qc9dXHFBSs0dJt/YI5any+24z5XGK5F134aOcU02YFw9QW6GvmYfMSk1PpNVWPul5iQfLQ/tadj8kbbnVRKU5XJmF23P5ld7W03Hab6rp8X4z/7WjdVapA4xW/o1fkibWS+70Bucjd5j3EgvvZRN4lF2zsSpd0dn0kstqn5CPqQ3425cqb3rZVhoeouNiUz2aiSYqrApIHWxGUBO6I/8Y7ZbE+IduCxcfsVRw0adyUaNUppCRKP0Yevbl3rvBkIr8/g6Jc/hzfxxkvWSGJ1ojL9h4gW9Gvilky/G+jUSQppLSBQkfyG9XZShyZsOu6FbcraSa5IG4zW5RneSeVbTh8CHdB/67mu8UF/HcgYPbzQ5a3pbeJ17DAua0G29q1M1DmEON/4ok09FiC54YVFa313IZryZW8RjXo/1Hr4q4l3Ay6+bj+nE92uvLj2itk+GW9eTGBGchMeqVPvL5EcXTsehCtGeCwp8F1NsbRaP1CbXBIol1VSFDVOBlH3Up6OuNVjIrYBndGY3LFDhceXaQP2y355431+roFUgZXGAJADiae3IYUxujqJu/csC7JlWMPvGfIn60McW+1MM+GvVhf15UCxSLynWZGasup1Vt5aL49UQpr8L2ylwzXi8zjv99Qw2mwHfOepUbOhfRuFQW8fC151FrNGd//Xk6n2tSqMr0SF7bit7M65i/A/3Ejxrx4d0rgAAAABJRU5ErkJggg==";
const VU_LOGO_MARK = `<img src="${VU_LOGO_DATA_URI}" alt="Victoria University" style="width:100%;height:100%;object-fit:contain;display:block;" />`;

const ICONS = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  records: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  chevR: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M9 18l6-6-6-6"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="17" height="17"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  trend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 5v14M5 12h14"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="17" height="17"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M17.94 17.94A10.94 10.94 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><path d="M1 1l22 22"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="11" height="11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="64" height="64"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>`,
  inbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="40" height="40"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>`,
  schedule: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><circle cx="8" cy="15" r="1"/><circle cx="12" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>`,
  qrcode: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20v.01"/></svg>`,
  keypad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="1.5"/><circle cx="12" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/><circle cx="6" cy="18" r="1.5"/><circle cx="12" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>`,
  flag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V15"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  fileText: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
  fileSpreadsheet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 13v4"/></svg>`,
  alertTriangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 005 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 005 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 5a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09A1.65 1.65 0 0015 5a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09A1.65 1.65 0 0019.4 15z"/></svg>`,
  graduation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 5v6c0 1.66-4 3-9 3s-9-1.34-9-3V5"/><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>`,
  userCog: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><circle cx="19" cy="16" r="2.5"/><path d="M19 12v1M19 19v1M16.4 14.2l.9.5M21.7 17.3l.9.5M16.4 17.8l.9-.5M21.7 14.7l.9-.5"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9v.01M9 13v.01M9 17v.01M15 9v.01M15 13v.01M15 17v.01"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  sliders: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  archive: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 002 2h12a2 2 0 002-2V8M10 12h4"/></svg>`,
  scaleIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 7l5-4 5 4M3 7c0 4 5 4 5 0M13 7l5-4 5 4M13 7c0 4 5 4 5 0M6 21h12"/></svg>`,
  gavel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 10l-7.5 7.5a1.5 1.5 0 01-2-2L12 8M16 6l3 3M5 19h14M10.5 5.5l5 5M14 4l6 6"/></svg>`,
  megaphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v3a1 1 0 001 1h2l4.5 4.5a1 1 0 001.5-.9V6.4a1 1 0 00-1.5-.9L6 10H4a1 1 0 00-1 1z"/><path d="M17 8a5 5 0 010 8M20 5a8.5 8.5 0 010 14"/></svg>`,
};

// ---------- MOCK DATA ----------

// ============================================================
// FACULTY / PROGRAMME STRUCTURE (Faculty -> Programme -> Course -> Class)
// ============================================================
const FACULTIES = [{"key": "computing", "name": "Faculty of Computing & Informatics", "programmes": ["cs", "it", "swe"]}, {"key": "business", "name": "Faculty of Business & Management", "programmes": ["biz", "acc", "mkt"]}, {"key": "engineering", "name": "Faculty of Engineering", "programmes": ["civ", "eee", "mech"]}, {"key": "science", "name": "Faculty of Science", "programmes": ["bio", "chem", "math"]}, {"key": "arts", "name": "Faculty of Arts & Education", "programmes": ["edu", "mc"]}];

const PROGRAMMES = [{"facultyKey": "computing", "facultyName": "Faculty of Computing & Informatics", "key": "cs", "name": "Computer Science", "codePrefix": "CSF"}, {"facultyKey": "computing", "facultyName": "Faculty of Computing & Informatics", "key": "it", "name": "Information Technology", "codePrefix": "ITF"}, {"facultyKey": "computing", "facultyName": "Faculty of Computing & Informatics", "key": "swe", "name": "Software Engineering", "codePrefix": "SWF"}, {"facultyKey": "business", "facultyName": "Faculty of Business & Management", "key": "biz", "name": "Business Administration", "codePrefix": "BAF"}, {"facultyKey": "business", "facultyName": "Faculty of Business & Management", "key": "acc", "name": "Accounting & Finance", "codePrefix": "ACF"}, {"facultyKey": "business", "facultyName": "Faculty of Business & Management", "key": "mkt", "name": "Marketing", "codePrefix": "MKF"}, {"facultyKey": "engineering", "facultyName": "Faculty of Engineering", "key": "civ", "name": "Civil Engineering", "codePrefix": "CVF"}, {"facultyKey": "engineering", "facultyName": "Faculty of Engineering", "key": "eee", "name": "Electrical Engineering", "codePrefix": "EEF"}, {"facultyKey": "engineering", "facultyName": "Faculty of Engineering", "key": "mech", "name": "Mechanical Engineering", "codePrefix": "MEF"}, {"facultyKey": "science", "facultyName": "Faculty of Science", "key": "bio", "name": "Biology", "codePrefix": "BIF"}, {"facultyKey": "science", "facultyName": "Faculty of Science", "key": "chem", "name": "Chemistry", "codePrefix": "CHF"}, {"facultyKey": "science", "facultyName": "Faculty of Science", "key": "math", "name": "Mathematics & Statistics", "codePrefix": "MSF"}, {"facultyKey": "arts", "facultyName": "Faculty of Arts & Education", "key": "edu", "name": "Education", "codePrefix": "EDF"}, {"facultyKey": "arts", "facultyName": "Faculty of Arts & Education", "key": "mc", "name": "Mass Communication", "codePrefix": "MCF"}];

const PROGRAMME_TO_FACULTY = {"cs": "Faculty of Computing & Informatics", "it": "Faculty of Computing & Informatics", "swe": "Faculty of Computing & Informatics", "biz": "Faculty of Business & Management", "acc": "Faculty of Business & Management", "mkt": "Faculty of Business & Management", "civ": "Faculty of Engineering", "eee": "Faculty of Engineering", "mech": "Faculty of Engineering", "bio": "Faculty of Science", "chem": "Faculty of Science", "math": "Faculty of Science", "edu": "Faculty of Arts & Education", "mc": "Faculty of Arts & Education"};

const FACULTY_COUNTS = [{"key": "computing", "label": "Faculty of Computing & Informatics", "count": 113}, {"key": "business", "label": "Faculty of Business & Management", "count": 111}, {"key": "engineering", "label": "Faculty of Engineering", "count": 111}, {"key": "science", "label": "Faculty of Science", "count": 111}, {"key": "arts", "label": "Faculty of Arts & Education", "count": 74}];

const DEPT_COUNTS = [{"key": "cs", "label": "Computer Science", "facultyKey": "computing", "facultyLabel": "Faculty of Computing & Informatics", "count": 38}, {"key": "it", "label": "Information Technology", "facultyKey": "computing", "facultyLabel": "Faculty of Computing & Informatics", "count": 38}, {"key": "swe", "label": "Software Engineering", "facultyKey": "computing", "facultyLabel": "Faculty of Computing & Informatics", "count": 37}, {"key": "biz", "label": "Business Administration", "facultyKey": "business", "facultyLabel": "Faculty of Business & Management", "count": 37}, {"key": "acc", "label": "Accounting & Finance", "facultyKey": "business", "facultyLabel": "Faculty of Business & Management", "count": 37}, {"key": "mkt", "label": "Marketing", "facultyKey": "business", "facultyLabel": "Faculty of Business & Management", "count": 37}, {"key": "civ", "label": "Civil Engineering", "facultyKey": "engineering", "facultyLabel": "Faculty of Engineering", "count": 37}, {"key": "eee", "label": "Electrical Engineering", "facultyKey": "engineering", "facultyLabel": "Faculty of Engineering", "count": 37}, {"key": "mech", "label": "Mechanical Engineering", "facultyKey": "engineering", "facultyLabel": "Faculty of Engineering", "count": 37}, {"key": "bio", "label": "Biology", "facultyKey": "science", "facultyLabel": "Faculty of Science", "count": 37}, {"key": "chem", "label": "Chemistry", "facultyKey": "science", "facultyLabel": "Faculty of Science", "count": 37}, {"key": "math", "label": "Mathematics & Statistics", "facultyKey": "science", "facultyLabel": "Faculty of Science", "count": 37}, {"key": "edu", "label": "Education", "facultyKey": "arts", "facultyLabel": "Faculty of Arts & Education", "count": 37}, {"key": "mc", "label": "Mass Communication", "facultyKey": "arts", "facultyLabel": "Faculty of Arts & Education", "count": 37}];

// 520+ generated students across all programmes (legacy demo students reserved
// at their original registration numbers — see datagen/generate.py)
const STUDENTS = [{"id": 1, "name": "Aisha Nakamya", "reg": "VU-CSF-2401-0001-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 97, "trend": "up"}, {"id": 2, "name": "Brian Ssemwanga", "reg": "VU-CSF-2401-0002-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 98, "trend": "up"}, {"id": 3, "name": "Christine Namboozo", "reg": "VU-CSF-2401-0003-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 100, "trend": "up"}, {"id": 4, "name": "David Kiggundu", "reg": "VU-CSF-2401-0004-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 55, "trend": "down"}, {"id": 5, "name": "Esther Nalubega", "reg": "VU-CSF-2401-0005-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 91, "trend": "up"}, {"id": 6, "name": "Fred Kibirige", "reg": "VU-CSF-2401-0006-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 8, "trend": "down"}, {"id": 7, "name": "Grace Nakirya", "reg": "VU-CSF-2401-0007-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 100, "trend": "up"}, {"id": 8, "name": "Hassan Mbazira", "reg": "VU-CSF-2401-0008-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 100, "trend": "up"}, {"id": 9, "name": "Irene Namukasa", "reg": "VU-CSF-2401-0009-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 100, "trend": "up"}, {"id": 10, "name": "Joseph Ssebuliba", "reg": "VU-CSF-2401-0010-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 97, "trend": "up"}, {"id": 11, "name": "Victor Mbazira", "reg": "VU-CSF-2401-0021-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 79, "trend": "up"}, {"id": 12, "name": "Andrew Nambooze", "reg": "VU-CSF-2401-0022-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 75, "trend": "up"}, {"id": 13, "name": "Hellen Emmanuel", "reg": "VU-CSF-2401-0023-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 97, "trend": "down"}, {"id": 14, "name": "Immaculate Nansubuga", "reg": "VU-CSF-2401-0024-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 99, "trend": "up"}, {"id": 15, "name": "Dennis Ssegawa", "reg": "VU-CSF-2401-0025-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 70, "trend": "down"}, {"id": 16, "name": "Harriet Kibirige", "reg": "VU-CSF-2401-0026-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 94, "trend": "up"}, {"id": 17, "name": "Mary Kizza", "reg": "VU-CSF-2401-0027-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 87, "trend": "up"}, {"id": 18, "name": "Kenneth Wabwa", "reg": "VU-CSF-2401-0028-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 93, "trend": "up"}, {"id": 19, "name": "Eric Nalubega", "reg": "VU-CSF-2401-0029-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 77, "trend": "up"}, {"id": 20, "name": "Faridah Okwir", "reg": "VU-CSF-2401-0030-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 80, "trend": "up"}, {"id": 21, "name": "Cissy Annet", "reg": "VU-CSF-2401-0031-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 95, "trend": "up"}, {"id": 22, "name": "Robert Kabuye", "reg": "VU-CSF-2401-0032-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 89, "trend": "down"}, {"id": 23, "name": "Olivia Kabuye", "reg": "VU-CSF-2401-0033-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 99, "trend": "up"}, {"id": 24, "name": "Janet Namboozo", "reg": "VU-CSF-2401-0034-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 58, "trend": "down"}, {"id": 25, "name": "Felix Mukasa", "reg": "VU-CSF-2401-0035-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 95, "trend": "down"}, {"id": 26, "name": "Stella Ssali", "reg": "VU-CSF-2401-0036-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 83, "trend": "down"}, {"id": 27, "name": "Oscar Namirembe", "reg": "VU-CSF-2401-0037-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 91, "trend": "down"}, {"id": 28, "name": "Doreen Okello", "reg": "VU-CSF-2401-0038-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 67, "trend": "down"}, {"id": 29, "name": "Benjamin Ssegawa", "reg": "VU-CSF-2401-0039-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 30, "name": "Kenneth Nakamya", "reg": "VU-CSF-2401-0040-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 92, "trend": "up"}, {"id": 31, "name": "Martin Mugisha", "reg": "VU-CSF-2401-0041-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 89, "trend": "up"}, {"id": 32, "name": "Geoffrey Kizza", "reg": "VU-CSF-2401-0042-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 91, "trend": "up"}, {"id": 33, "name": "Umar Nakaddwa", "reg": "VU-CSF-2401-0043-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 70, "trend": "down"}, {"id": 34, "name": "Leo Sarah", "reg": "VU-CSF-2401-0044-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 75, "trend": "up"}, {"id": 35, "name": "Charles Ssemwanga", "reg": "VU-CSF-2401-0045-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 100, "trend": "up"}, {"id": 36, "name": "Kevin Kiggundu", "reg": "VU-CSF-2401-0046-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 1", "pct": 77, "trend": "down"}, {"id": 37, "name": "Sarah Okello", "reg": "VU-CSF-2401-0047-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 3", "pct": 55, "trend": "down"}, {"id": 38, "name": "Kenneth Sarah", "reg": "VU-CSF-2401-0048-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Computer Science", "deptKey": "cs", "year": "Year 2", "pct": 81, "trend": "up"}, {"id": 39, "name": "Felix Nakaddwa", "reg": "VU-ITF-2401-0049-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 89, "trend": "down"}, {"id": 40, "name": "Lillian Namutebi", "reg": "VU-ITF-2401-0050-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": null, "trend": null}, {"id": 41, "name": "Kenneth Emmanuel", "reg": "VU-ITF-2401-0051-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 60, "trend": "down"}, {"id": 42, "name": "Prossy Emmanuel", "reg": "VU-ITF-2401-0052-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 77, "trend": "up"}, {"id": 43, "name": "Patricia Nankunda", "reg": "VU-ITF-2401-0053-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 74, "trend": "down"}, {"id": 44, "name": "Nelson Byaruhanga", "reg": "VU-ITF-2401-0054-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 81, "trend": "up"}, {"id": 45, "name": "Faridah Nankunda", "reg": "VU-ITF-2401-0055-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 98, "trend": "up"}, {"id": 46, "name": "Andrew Mugisha", "reg": "VU-ITF-2401-0056-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 85, "trend": "up"}, {"id": 47, "name": "Linda Tendo", "reg": "VU-ITF-2401-0057-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 67, "trend": "down"}, {"id": 48, "name": "Patricia Wamala", "reg": "VU-ITF-2401-0058-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 57, "trend": "down"}, {"id": 49, "name": "Faridah Kiggundu", "reg": "VU-ITF-2401-0059-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 77, "trend": "up"}, {"id": 50, "name": "Betty Atim", "reg": "VU-ITF-2401-0060-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 76, "trend": "up"}, {"id": 51, "name": "Faith Nakamya", "reg": "VU-ITF-2401-0061-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 89, "trend": "up"}, {"id": 52, "name": "Joseph Wasswa", "reg": "VU-ITF-2401-0062-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 97, "trend": "down"}, {"id": 53, "name": "Teddy Tendo", "reg": "VU-ITF-2401-0063-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": null, "trend": null}, {"id": 54, "name": "Isaiah Achieng", "reg": "VU-ITF-2401-0064-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": null, "trend": null}, {"id": 55, "name": "Oscar Byaruhanga", "reg": "VU-ITF-2401-0065-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 76, "trend": "up"}, {"id": 56, "name": "Diana Nalubega", "reg": "VU-ITF-2401-0066-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 87, "trend": "up"}, {"id": 57, "name": "Michael Namutebi", "reg": "VU-ITF-2401-0067-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 88, "trend": "up"}, {"id": 58, "name": "Norah Annet", "reg": "VU-ITF-2401-0068-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 87, "trend": "up"}, {"id": 59, "name": "Zack Mugisha", "reg": "VU-ITF-2401-0069-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 77, "trend": "up"}, {"id": 60, "name": "Timothy Nantongo", "reg": "VU-ITF-2401-0070-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 46, "trend": "down"}, {"id": 61, "name": "Emmanuel Ssali", "reg": "VU-ITF-2401-0071-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 82, "trend": "up"}, {"id": 62, "name": "Queen Sarah", "reg": "VU-ITF-2401-0072-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 94, "trend": "up"}, {"id": 63, "name": "Zack Lubega", "reg": "VU-ITF-2401-0073-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 44, "trend": "down"}, {"id": 64, "name": "Norah Mbazira", "reg": "VU-ITF-2401-0074-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 69, "trend": "down"}, {"id": 65, "name": "Robert Annet", "reg": "VU-ITF-2401-0075-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 83, "trend": "down"}, {"id": 66, "name": "Margaret Kiggundu", "reg": "VU-ITF-2401-0076-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 76, "trend": "up"}, {"id": 67, "name": "Zainab Tushabe", "reg": "VU-ITF-2401-0077-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 98, "trend": "down"}, {"id": 68, "name": "Kenneth Naggayi", "reg": "VU-ITF-2401-0078-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 62, "trend": "down"}, {"id": 69, "name": "Teddy Achieng", "reg": "VU-ITF-2401-0079-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 79, "trend": "down"}, {"id": 70, "name": "Patience Namboozo", "reg": "VU-ITF-2401-0080-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 76, "trend": "up"}, {"id": 71, "name": "Gloria Apio", "reg": "VU-ITF-2401-0081-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 92, "trend": "down"}, {"id": 72, "name": "Tom Nambooze", "reg": "VU-ITF-2401-0082-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 80, "trend": "up"}, {"id": 73, "name": "Fred Ssemwanga", "reg": "VU-ITF-2401-0083-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 88, "trend": "up"}, {"id": 74, "name": "Olivia Sarah", "reg": "VU-ITF-2401-0084-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 3", "pct": 90, "trend": "up"}, {"id": 75, "name": "Florence Wamala", "reg": "VU-ITF-2401-0085-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 2", "pct": 82, "trend": "up"}, {"id": 76, "name": "Grace Nankunda", "reg": "VU-ITF-2401-0086-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Information Technology", "deptKey": "it", "year": "Year 1", "pct": 77, "trend": "up"}, {"id": 77, "name": "Brenda Mugisha", "reg": "VU-SWF-2401-0087-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 92, "trend": "up"}, {"id": 78, "name": "Grace Mbazira", "reg": "VU-SWF-2401-0088-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 2", "pct": 83, "trend": "up"}, {"id": 79, "name": "Harriet Bbosa", "reg": "VU-SWF-2401-0089-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 2", "pct": 88, "trend": "up"}, {"id": 80, "name": "Gertrude Namatovu", "reg": "VU-SWF-2401-0090-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": 75, "trend": "up"}, {"id": 81, "name": "Damalie Ssegawa", "reg": "VU-SWF-2401-0091-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": 94, "trend": "up"}, {"id": 82, "name": "Yusuf Mbazira", "reg": "VU-SWF-2401-0092-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 96, "trend": "down"}, {"id": 83, "name": "Yvonne Namirembe", "reg": "VU-SWF-2401-0093-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 53, "trend": "down"}, {"id": 84, "name": "Zack Okwir", "reg": "VU-SWF-2401-0094-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 74, "trend": "down"}, {"id": 85, "name": "Susan Namirembe", "reg": "VU-SWF-2401-0095-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 81, "trend": "down"}, {"id": 86, "name": "Oscar Bbosa", "reg": "VU-SWF-2401-0096-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 96, "trend": "up"}, {"id": 87, "name": "Frank Byaruhanga", "reg": "VU-SWF-2401-0097-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 56, "trend": "down"}, {"id": 88, "name": "Yusuf Kabuye", "reg": "VU-SWF-2401-0098-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 99, "trend": "up"}, {"id": 89, "name": "Andrew Nakaddwa", "reg": "VU-SWF-2401-0099-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": 65, "trend": "down"}, {"id": 90, "name": "Linda Byaruhanga", "reg": "VU-SWF-2401-0100-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 53, "trend": "down"}, {"id": 91, "name": "Umar Namatovu", "reg": "VU-SWF-2401-0101-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": 87, "trend": "up"}, {"id": 92, "name": "Stella Mugisha", "reg": "VU-SWF-2401-0102-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 99, "trend": "up"}, {"id": 93, "name": "Nathan Ssegawa", "reg": "VU-SWF-2401-0103-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": 91, "trend": "down"}, {"id": 94, "name": "Nabaale Lubega", "reg": "VU-SWF-2401-0104-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": 44, "trend": "down"}, {"id": 95, "name": "Ivan Nankunda", "reg": "VU-SWF-2401-0105-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 99, "trend": "down"}, {"id": 96, "name": "Simon Kizza", "reg": "VU-SWF-2401-0106-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 97, "name": "Julius Byaruhanga", "reg": "VU-SWF-2401-0107-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 2", "pct": 95, "trend": "up"}, {"id": 98, "name": "Martin Tushabe", "reg": "VU-SWF-2401-0108-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 99, "name": "Felix Wabwa", "reg": "VU-SWF-2401-0109-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": 92, "trend": "up"}, {"id": 100, "name": "Rachel Ssebuliba", "reg": "VU-SWF-2401-0110-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": 68, "trend": "down"}, {"id": 101, "name": "Sarah Atim", "reg": "VU-SWF-2401-0111-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 2", "pct": 76, "trend": "up"}, {"id": 102, "name": "Hassan Okwir", "reg": "VU-SWF-2401-0112-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": null, "trend": null}, {"id": 103, "name": "Leo Namatovu", "reg": "VU-SWF-2401-0113-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 2", "pct": 84, "trend": "down"}, {"id": 104, "name": "Hassan Achieng", "reg": "VU-SWF-2401-0114-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 82, "trend": "down"}, {"id": 105, "name": "Immaculate Nabukyeyo", "reg": "VU-SWF-2401-0115-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 2", "pct": 96, "trend": "down"}, {"id": 106, "name": "Geoffrey Sarah", "reg": "VU-SWF-2401-0116-EVE", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 2", "pct": 92, "trend": "up"}, {"id": 107, "name": "Brian Kyeyune", "reg": "VU-SWF-2401-0117-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 53, "trend": "down"}, {"id": 108, "name": "Rachel Wamala", "reg": "VU-SWF-2401-0118-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": 81, "trend": "down"}, {"id": 109, "name": "Yvonne Akwango", "reg": "VU-SWF-2401-0119-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 2", "pct": 88, "trend": "up"}, {"id": 110, "name": "Brenda Byaruhanga", "reg": "VU-SWF-2401-0120-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": null, "trend": null}, {"id": 111, "name": "Brenda Emmanuel", "reg": "VU-SWF-2401-0121-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 3", "pct": 76, "trend": "up"}, {"id": 112, "name": "Esther Nantongo", "reg": "VU-SWF-2401-0122-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 1", "pct": 78, "trend": "up"}, {"id": 113, "name": "Ivan Wasswa", "reg": "VU-SWF-2401-0123-DAY", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "dept": "Software Engineering", "deptKey": "swe", "year": "Year 2", "pct": 74, "trend": "down"}, {"id": 114, "name": "Kampire Sarah", "reg": "VU-BAF-2401-0011-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 100, "trend": "up"}, {"id": 115, "name": "Lwanga Moses", "reg": "VU-BAF-2401-0012-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 1", "pct": 100, "trend": "up"}, {"id": 116, "name": "Mary Tendo", "reg": "VU-BAF-2401-0013-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 100, "trend": "up"}, {"id": 117, "name": "Nabaale Annet", "reg": "VU-BAF-2401-0014-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 1", "pct": 100, "trend": "up"}, {"id": 118, "name": "Opio Emmanuel", "reg": "VU-BAF-2401-0015-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 8, "trend": "down"}, {"id": 119, "name": "Prossy Namutebi", "reg": "VU-BAF-2401-0016-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 100, "trend": "up"}, {"id": 120, "name": "Julius Naggayi", "reg": "VU-BAF-2401-0124-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 1", "pct": 69, "trend": "down"}, {"id": 121, "name": "Harriet Kyeyune", "reg": "VU-BAF-2401-0125-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 1", "pct": 87, "trend": "down"}, {"id": 122, "name": "Felix Tendo", "reg": "VU-BAF-2401-0126-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 1", "pct": 82, "trend": "up"}, {"id": 123, "name": "Dennis Tushabe", "reg": "VU-BAF-2401-0127-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 78, "trend": "up"}, {"id": 124, "name": "Brenda Achieng", "reg": "VU-BAF-2401-0128-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 60, "trend": "down"}, {"id": 125, "name": "Annet Nakamya", "reg": "VU-BAF-2401-0129-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 51, "trend": "down"}, {"id": 126, "name": "Victor Wamala", "reg": "VU-BAF-2401-0130-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 73, "trend": "down"}, {"id": 127, "name": "Xavier Nabukyeyo", "reg": "VU-BAF-2401-0131-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 90, "trend": "down"}, {"id": 128, "name": "Lwanga Kizza", "reg": "VU-BAF-2401-0132-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 77, "trend": "up"}, {"id": 129, "name": "Ronald Namutebi", "reg": "VU-BAF-2401-0133-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 85, "trend": "up"}, {"id": 130, "name": "Daniel Mukasa", "reg": "VU-BAF-2401-0134-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 1", "pct": 83, "trend": "up"}, {"id": 131, "name": "Patricia Bbosa", "reg": "VU-BAF-2401-0135-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 91, "trend": "up"}, {"id": 132, "name": "Brenda Namutebi", "reg": "VU-BAF-2401-0136-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 82, "trend": "down"}, {"id": 133, "name": "Walter Naggayi", "reg": "VU-BAF-2401-0137-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": null, "trend": null}, {"id": 134, "name": "Rose Emmanuel", "reg": "VU-BAF-2401-0138-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 93, "trend": "up"}, {"id": 135, "name": "Alex Lubega", "reg": "VU-BAF-2401-0139-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 92, "trend": "up"}, {"id": 136, "name": "Cissy Wasswa", "reg": "VU-BAF-2401-0140-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 78, "trend": "up"}, {"id": 137, "name": "Viola Mbazira", "reg": "VU-BAF-2401-0141-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 80, "trend": "up"}, {"id": 138, "name": "Hellen Nambooze", "reg": "VU-BAF-2401-0142-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 99, "trend": "up"}, {"id": 139, "name": "Faridah Tendo", "reg": "VU-BAF-2401-0143-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 65, "trend": "down"}, {"id": 140, "name": "Eric Achieng", "reg": "VU-BAF-2401-0144-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 1", "pct": 92, "trend": "up"}, {"id": 141, "name": "Dennis Namukasa", "reg": "VU-BAF-2401-0145-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 75, "trend": "up"}, {"id": 142, "name": "Alex Byaruhanga", "reg": "VU-BAF-2401-0146-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 83, "trend": "down"}, {"id": 143, "name": "Joan Nalubega", "reg": "VU-BAF-2401-0147-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 96, "trend": "up"}, {"id": 144, "name": "Teddy Ssebuliba", "reg": "VU-BAF-2401-0148-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 47, "trend": "down"}, {"id": 145, "name": "Lillian Lubega", "reg": "VU-BAF-2401-0149-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 82, "trend": "down"}, {"id": 146, "name": "Ronald Nansubuga", "reg": "VU-BAF-2401-0150-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 84, "trend": "up"}, {"id": 147, "name": "Simon Nambooze", "reg": "VU-BAF-2401-0151-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 1", "pct": 68, "trend": "down"}, {"id": 148, "name": "Norah Nankunda", "reg": "VU-BAF-2401-0152-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 1", "pct": 66, "trend": "down"}, {"id": 149, "name": "Agnes Nakamya", "reg": "VU-BAF-2401-0153-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 2", "pct": 84, "trend": "up"}, {"id": 150, "name": "Janet Wabwa", "reg": "VU-BAF-2401-0154-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Business Administration", "deptKey": "biz", "year": "Year 3", "pct": 77, "trend": "up"}, {"id": 151, "name": "Norah Kabuye", "reg": "VU-ACF-2401-0155-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": 88, "trend": "up"}, {"id": 152, "name": "James Emmanuel", "reg": "VU-ACF-2401-0156-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": 79, "trend": "up"}, {"id": 153, "name": "Prossy Sarah", "reg": "VU-ACF-2401-0157-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 84, "trend": "down"}, {"id": 154, "name": "Lillian Wamala", "reg": "VU-ACF-2401-0158-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": 83, "trend": "down"}, {"id": 155, "name": "Opio Kibirige", "reg": "VU-ACF-2401-0159-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": 85, "trend": "up"}, {"id": 156, "name": "Grace Kibirige", "reg": "VU-ACF-2401-0160-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 1", "pct": 93, "trend": "up"}, {"id": 157, "name": "Leo Apio", "reg": "VU-ACF-2401-0161-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 80, "trend": "down"}, {"id": 158, "name": "George Mugisha", "reg": "VU-ACF-2401-0162-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 74, "trend": "down"}, {"id": 159, "name": "Lwanga Kabuye", "reg": "VU-ACF-2401-0163-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 88, "trend": "up"}, {"id": 160, "name": "Yvonne Nankunda", "reg": "VU-ACF-2401-0164-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 1", "pct": 97, "trend": "down"}, {"id": 161, "name": "Queen Nankunda", "reg": "VU-ACF-2401-0165-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 89, "trend": "up"}, {"id": 162, "name": "Viola Ssali", "reg": "VU-ACF-2401-0166-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 91, "trend": "up"}, {"id": 163, "name": "Yusuf Achieng", "reg": "VU-ACF-2401-0167-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 70, "trend": "down"}, {"id": 164, "name": "Tom Okello", "reg": "VU-ACF-2401-0168-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 81, "trend": "up"}, {"id": 165, "name": "Kenneth Namukasa", "reg": "VU-ACF-2401-0169-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 78, "trend": "up"}, {"id": 166, "name": "Umar Bbosa", "reg": "VU-ACF-2401-0170-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 1", "pct": 75, "trend": "down"}, {"id": 167, "name": "Doreen Emmanuel", "reg": "VU-ACF-2401-0171-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 1", "pct": 44, "trend": "down"}, {"id": 168, "name": "Daniel Naggayi", "reg": "VU-ACF-2401-0172-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 90, "trend": "down"}, {"id": 169, "name": "Linda Wamala", "reg": "VU-ACF-2401-0173-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": 74, "trend": "down"}, {"id": 170, "name": "Frank Nambooze", "reg": "VU-ACF-2401-0174-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 1", "pct": 100, "trend": "down"}, {"id": 171, "name": "Annet Nankya", "reg": "VU-ACF-2401-0175-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 84, "trend": "down"}, {"id": 172, "name": "Teddy Nansubuga", "reg": "VU-ACF-2401-0176-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": 99, "trend": "down"}, {"id": 173, "name": "Timothy Mukasa", "reg": "VU-ACF-2401-0177-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 1", "pct": 87, "trend": "up"}, {"id": 174, "name": "Nathan Atim", "reg": "VU-ACF-2401-0178-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 1", "pct": 100, "trend": "down"}, {"id": 175, "name": "Gertrude Nankunda", "reg": "VU-ACF-2401-0179-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": 76, "trend": "up"}, {"id": 176, "name": "Emmanuel Kyeyune", "reg": "VU-ACF-2401-0180-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 89, "trend": "up"}, {"id": 177, "name": "Henry Wamala", "reg": "VU-ACF-2401-0181-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 1", "pct": 95, "trend": "up"}, {"id": 178, "name": "Winnie Byaruhanga", "reg": "VU-ACF-2401-0182-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 95, "trend": "up"}, {"id": 179, "name": "Zainab Apio", "reg": "VU-ACF-2401-0183-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": 97, "trend": "down"}, {"id": 180, "name": "James Namboozo", "reg": "VU-ACF-2401-0184-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": 84, "trend": "up"}, {"id": 181, "name": "Julius Kibirige", "reg": "VU-ACF-2401-0185-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 97, "trend": "up"}, {"id": 182, "name": "Opio Sarah", "reg": "VU-ACF-2401-0186-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": null, "trend": null}, {"id": 183, "name": "Yvonne Kiggundu", "reg": "VU-ACF-2401-0187-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": 82, "trend": "down"}, {"id": 184, "name": "Michael Apio", "reg": "VU-ACF-2401-0188-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 1", "pct": 52, "trend": "down"}, {"id": 185, "name": "Tom Apio", "reg": "VU-ACF-2401-0189-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 1", "pct": 82, "trend": "down"}, {"id": 186, "name": "Victor Ssali", "reg": "VU-ACF-2401-0190-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 2", "pct": null, "trend": null}, {"id": 187, "name": "Ivan Wabwa", "reg": "VU-ACF-2401-0191-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Accounting & Finance", "deptKey": "acc", "year": "Year 3", "pct": 51, "trend": "down"}, {"id": 188, "name": "Peter Nakaddwa", "reg": "VU-MKF-2401-0192-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 189, "name": "Florence Okwir", "reg": "VU-MKF-2401-0193-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 2", "pct": 86, "trend": "up"}, {"id": 190, "name": "Dennis Wabwa", "reg": "VU-MKF-2401-0194-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 83, "trend": "up"}, {"id": 191, "name": "Nathan Nambooze", "reg": "VU-MKF-2401-0195-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 84, "trend": "up"}, {"id": 192, "name": "Robert Tumwesigye", "reg": "VU-MKF-2401-0196-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 96, "trend": "up"}, {"id": 193, "name": "Umar Nakirya", "reg": "VU-MKF-2401-0197-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 194, "name": "Oscar Otim", "reg": "VU-MKF-2401-0198-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 85, "trend": "down"}, {"id": 195, "name": "Carol Tendo", "reg": "VU-MKF-2401-0199-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 86, "trend": "up"}, {"id": 196, "name": "Betty Ssali", "reg": "VU-MKF-2401-0200-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 2", "pct": 85, "trend": "up"}, {"id": 197, "name": "Ivan Nalubega", "reg": "VU-MKF-2401-0201-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 96, "trend": "down"}, {"id": 198, "name": "Lawrence Otim", "reg": "VU-MKF-2401-0202-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": null, "trend": null}, {"id": 199, "name": "Isaac Mbazira", "reg": "VU-MKF-2401-0203-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 2", "pct": 83, "trend": "down"}, {"id": 200, "name": "Victor Otim", "reg": "VU-MKF-2401-0204-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 94, "trend": "up"}, {"id": 201, "name": "Simon Emmanuel", "reg": "VU-MKF-2401-0205-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 97, "trend": "up"}, {"id": 202, "name": "Xavier Atim", "reg": "VU-MKF-2401-0206-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 84, "trend": "down"}, {"id": 203, "name": "Joan Nakirya", "reg": "VU-MKF-2401-0207-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 72, "trend": "down"}, {"id": 204, "name": "Eve Nankunda", "reg": "VU-MKF-2401-0208-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 93, "trend": "up"}, {"id": 205, "name": "Hassan Mugisha", "reg": "VU-MKF-2401-0209-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 83, "trend": "up"}, {"id": 206, "name": "Collins Otim", "reg": "VU-MKF-2401-0210-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 86, "trend": "up"}, {"id": 207, "name": "Benjamin Otim", "reg": "VU-MKF-2401-0211-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 76, "trend": "down"}, {"id": 208, "name": "Patricia Tendo", "reg": "VU-MKF-2401-0212-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 77, "trend": "up"}, {"id": 209, "name": "Walter Kabuye", "reg": "VU-MKF-2401-0213-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": null, "trend": null}, {"id": 210, "name": "Zainab Namutebi", "reg": "VU-MKF-2401-0214-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 73, "trend": "down"}, {"id": 211, "name": "Gloria Kyeyune", "reg": "VU-MKF-2401-0215-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 99, "trend": "up"}, {"id": 212, "name": "Quincy Nakamya", "reg": "VU-MKF-2401-0216-EVE", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 2", "pct": 67, "trend": "down"}, {"id": 213, "name": "James Ssali", "reg": "VU-MKF-2401-0217-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 79, "trend": "up"}, {"id": 214, "name": "Cissy Namutebi", "reg": "VU-MKF-2401-0218-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 65, "trend": "down"}, {"id": 215, "name": "Patience Nambooze", "reg": "VU-MKF-2401-0219-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 2", "pct": 90, "trend": "down"}, {"id": 216, "name": "Nathan Otim", "reg": "VU-MKF-2401-0220-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 82, "trend": "up"}, {"id": 217, "name": "Herbert Nankunda", "reg": "VU-MKF-2401-0221-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 75, "trend": "up"}, {"id": 218, "name": "Bob Namirembe", "reg": "VU-MKF-2401-0222-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 2", "pct": 89, "trend": "up"}, {"id": 219, "name": "Brenda Mukasa", "reg": "VU-MKF-2401-0223-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 59, "trend": "down"}, {"id": 220, "name": "Victor Kyeyune", "reg": "VU-MKF-2401-0224-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 94, "trend": "up"}, {"id": 221, "name": "Timothy Nankya", "reg": "VU-MKF-2401-0225-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 3", "pct": 78, "trend": "up"}, {"id": 222, "name": "Lwanga Nansubuga", "reg": "VU-MKF-2401-0226-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 87, "trend": "down"}, {"id": 223, "name": "Herbert Nakirya", "reg": "VU-MKF-2401-0227-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 2", "pct": 86, "trend": "up"}, {"id": 224, "name": "Benjamin Byaruhanga", "reg": "VU-MKF-2401-0228-DAY", "facultyKey": "business", "faculty": "Faculty of Business & Management", "dept": "Marketing", "deptKey": "mkt", "year": "Year 1", "pct": 53, "trend": "down"}, {"id": 225, "name": "Ronald Ssali", "reg": "VU-ENG-2401-0017-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": null, "trend": null}, {"id": 226, "name": "Sarah Nabukyeyo", "reg": "VU-ENG-2401-0018-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": null, "trend": null}, {"id": 227, "name": "Timothy Wabwa", "reg": "VU-ENG-2401-0019-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": null, "trend": null}, {"id": 228, "name": "Winnie Nakaddwa", "reg": "VU-ENG-2401-0020-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": null, "trend": null}, {"id": 229, "name": "Faridah Nambooze", "reg": "VU-CVF-2401-0229-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 65, "trend": "down"}, {"id": 230, "name": "Peter Lubega", "reg": "VU-CVF-2401-0230-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 51, "trend": "down"}, {"id": 231, "name": "Zack Okello", "reg": "VU-CVF-2401-0231-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": 84, "trend": "up"}, {"id": 232, "name": "Cissy Nakirya", "reg": "VU-CVF-2401-0232-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 72, "trend": "down"}, {"id": 233, "name": "Immaculate Nakirya", "reg": "VU-CVF-2401-0233-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": 99, "trend": "up"}, {"id": 234, "name": "Nelson Emmanuel", "reg": "VU-CVF-2401-0234-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": 94, "trend": "up"}, {"id": 235, "name": "Robert Nankunda", "reg": "VU-CVF-2401-0235-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 69, "trend": "down"}, {"id": 236, "name": "Annet Tumwesigye", "reg": "VU-CVF-2401-0236-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": 71, "trend": "down"}, {"id": 237, "name": "Sarah Ssebuliba", "reg": "VU-CVF-2401-0237-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": null, "trend": null}, {"id": 238, "name": "Julius Ojok", "reg": "VU-CVF-2401-0238-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": 80, "trend": "up"}, {"id": 239, "name": "Tracy Kizza", "reg": "VU-CVF-2401-0239-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": 77, "trend": "up"}, {"id": 240, "name": "Teddy Sarah", "reg": "VU-CVF-2401-0240-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 54, "trend": "down"}, {"id": 241, "name": "Yusuf Ssegawa", "reg": "VU-CVF-2401-0241-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": 81, "trend": "up"}, {"id": 242, "name": "Brenda Ssegawa", "reg": "VU-CVF-2401-0242-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": 90, "trend": "up"}, {"id": 243, "name": "Mary Emmanuel", "reg": "VU-CVF-2401-0243-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": null, "trend": null}, {"id": 244, "name": "Gloria Nakaddwa", "reg": "VU-CVF-2401-0244-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": 84, "trend": "up"}, {"id": 245, "name": "Lillian Nakamya", "reg": "VU-CVF-2401-0245-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": 71, "trend": "down"}, {"id": 246, "name": "Isaac Naggayi", "reg": "VU-CVF-2401-0246-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": 100, "trend": "up"}, {"id": 247, "name": "Winnie Namirembe", "reg": "VU-CVF-2401-0247-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": null, "trend": null}, {"id": 248, "name": "Winnie Mukasa", "reg": "VU-CVF-2401-0248-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 95, "trend": "down"}, {"id": 249, "name": "Rose Mbazira", "reg": "VU-CVF-2401-0249-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": 100, "trend": "down"}, {"id": 250, "name": "Doreen Ssegawa", "reg": "VU-CVF-2401-0250-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": 91, "trend": "up"}, {"id": 251, "name": "Brian Nakaddwa", "reg": "VU-CVF-2401-0251-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 80, "trend": "up"}, {"id": 252, "name": "Frank Kabuye", "reg": "VU-CVF-2401-0252-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": 70, "trend": "down"}, {"id": 253, "name": "Brenda Kizza", "reg": "VU-CVF-2401-0253-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 79, "trend": "up"}, {"id": 254, "name": "Florence Moses", "reg": "VU-CVF-2401-0254-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 77, "trend": "up"}, {"id": 255, "name": "Martin Kabuye", "reg": "VU-CVF-2401-0255-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": 93, "trend": "down"}, {"id": 256, "name": "Benjamin Namatovu", "reg": "VU-CVF-2401-0256-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 95, "trend": "up"}, {"id": 257, "name": "Sarah Byaruhanga", "reg": "VU-CVF-2401-0257-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 2", "pct": 93, "trend": "up"}, {"id": 258, "name": "Cissy Nankya", "reg": "VU-CVF-2401-0258-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": 76, "trend": "up"}, {"id": 259, "name": "Queen Nalubega", "reg": "VU-CVF-2401-0259-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 94, "trend": "down"}, {"id": 260, "name": "Ivan Kyeyune", "reg": "VU-CVF-2401-0260-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 3", "pct": 76, "trend": "down"}, {"id": 261, "name": "Nelson Mugisha", "reg": "VU-CVF-2401-0261-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Civil Engineering", "deptKey": "civ", "year": "Year 1", "pct": 79, "trend": "up"}, {"id": 262, "name": "Ronald Nakirya", "reg": "VU-EEF-2401-0262-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 60, "trend": "down"}, {"id": 263, "name": "Carol Namboozo", "reg": "VU-EEF-2401-0263-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 91, "trend": "up"}, {"id": 264, "name": "Damalie Otim", "reg": "VU-EEF-2401-0264-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 96, "trend": "up"}, {"id": 265, "name": "Umar Mugisha", "reg": "VU-EEF-2401-0265-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 61, "trend": "down"}, {"id": 266, "name": "Gertrude Wabwa", "reg": "VU-EEF-2401-0266-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 94, "trend": "up"}, {"id": 267, "name": "Zainab Kibirige", "reg": "VU-EEF-2401-0267-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 84, "trend": "down"}, {"id": 268, "name": "Patience Bbosa", "reg": "VU-EEF-2401-0268-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 87, "trend": "up"}, {"id": 269, "name": "Patience Nankunda", "reg": "VU-EEF-2401-0269-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 96, "trend": "up"}, {"id": 270, "name": "Walter Nankunda", "reg": "VU-EEF-2401-0270-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": null, "trend": null}, {"id": 271, "name": "Tracy Moses", "reg": "VU-EEF-2401-0271-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 81, "trend": "up"}, {"id": 272, "name": "Winnie Wabwa", "reg": "VU-EEF-2401-0272-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 98, "trend": "up"}, {"id": 273, "name": "Yusuf Akwango", "reg": "VU-EEF-2401-0273-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 80, "trend": "up"}, {"id": 274, "name": "Collins Tushabe", "reg": "VU-EEF-2401-0274-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 72, "trend": "down"}, {"id": 275, "name": "Mary Atim", "reg": "VU-EEF-2401-0275-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 89, "trend": "up"}, {"id": 276, "name": "Kelvin Nambooze", "reg": "VU-EEF-2401-0276-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 100, "trend": "down"}, {"id": 277, "name": "Edith Otim", "reg": "VU-EEF-2401-0277-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 278, "name": "Nathan Okwir", "reg": "VU-EEF-2401-0278-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 81, "trend": "up"}, {"id": 279, "name": "Walter Byaruhanga", "reg": "VU-EEF-2401-0279-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 56, "trend": "down"}, {"id": 280, "name": "Lillian Wabwa", "reg": "VU-EEF-2401-0280-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 91, "trend": "up"}, {"id": 281, "name": "Lwanga Kibirige", "reg": "VU-EEF-2401-0281-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 75, "trend": "down"}, {"id": 282, "name": "Nabaale Namirembe", "reg": "VU-EEF-2401-0282-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 77, "trend": "up"}, {"id": 283, "name": "Immaculate Ssemwanga", "reg": "VU-EEF-2401-0283-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 95, "trend": "up"}, {"id": 284, "name": "Stella Namukasa", "reg": "VU-EEF-2401-0284-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 97, "trend": "up"}, {"id": 285, "name": "Leo Naggayi", "reg": "VU-EEF-2401-0285-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": null, "trend": null}, {"id": 286, "name": "Brenda Ssemwanga", "reg": "VU-EEF-2401-0286-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 74, "trend": "down"}, {"id": 287, "name": "Henry Ssegawa", "reg": "VU-EEF-2401-0287-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 78, "trend": "up"}, {"id": 288, "name": "Kevin Atim", "reg": "VU-EEF-2401-0288-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 78, "trend": "down"}, {"id": 289, "name": "Quincy Achieng", "reg": "VU-EEF-2401-0289-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 97, "trend": "up"}, {"id": 290, "name": "Rose Ssegawa", "reg": "VU-EEF-2401-0290-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 88, "trend": "up"}, {"id": 291, "name": "Zack Nankunda", "reg": "VU-EEF-2401-0291-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 91, "trend": "up"}, {"id": 292, "name": "Gertrude Byaruhanga", "reg": "VU-EEF-2401-0292-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 83, "trend": "up"}, {"id": 293, "name": "Cissy Nalubega", "reg": "VU-EEF-2401-0293-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 78, "trend": "up"}, {"id": 294, "name": "Rachel Namboozo", "reg": "VU-EEF-2401-0294-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 2", "pct": 80, "trend": "down"}, {"id": 295, "name": "Dennis Byaruhanga", "reg": "VU-EEF-2401-0295-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 72, "trend": "down"}, {"id": 296, "name": "Irene Wabwa", "reg": "VU-EEF-2401-0296-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 1", "pct": 65, "trend": "down"}, {"id": 297, "name": "Viola Nakaddwa", "reg": "VU-EEF-2401-0297-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 90, "trend": "up"}, {"id": 298, "name": "Irene Okello", "reg": "VU-EEF-2401-0298-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Electrical Engineering", "deptKey": "eee", "year": "Year 3", "pct": 99, "trend": "up"}, {"id": 299, "name": "Xavier Akwango", "reg": "VU-MEF-2401-0299-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 87, "trend": "down"}, {"id": 300, "name": "Gertrude Akwango", "reg": "VU-MEF-2401-0300-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 1", "pct": 100, "trend": "up"}, {"id": 301, "name": "Joseph Kibirige", "reg": "VU-MEF-2401-0301-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 92, "trend": "up"}, {"id": 302, "name": "Yvonne Nakirya", "reg": "VU-MEF-2401-0302-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 1", "pct": 89, "trend": "down"}, {"id": 303, "name": "Betty Wasswa", "reg": "VU-MEF-2401-0303-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": null, "trend": null}, {"id": 304, "name": "Cissy Nantongo", "reg": "VU-MEF-2401-0304-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 76, "trend": "up"}, {"id": 305, "name": "Zack Kabuye", "reg": "VU-MEF-2401-0305-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 96, "trend": "up"}, {"id": 306, "name": "Grace Ssebuliba", "reg": "VU-MEF-2401-0306-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 79, "trend": "up"}, {"id": 307, "name": "Kevin Tushabe", "reg": "VU-MEF-2401-0307-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 93, "trend": "up"}, {"id": 308, "name": "Robert Ssebuliba", "reg": "VU-MEF-2401-0308-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 309, "name": "Nelson Namukasa", "reg": "VU-MEF-2401-0309-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 83, "trend": "up"}, {"id": 310, "name": "Joan Ssemwanga", "reg": "VU-MEF-2401-0310-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 92, "trend": "up"}, {"id": 311, "name": "Norah Tushabe", "reg": "VU-MEF-2401-0311-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 74, "trend": "down"}, {"id": 312, "name": "Queen Wasswa", "reg": "VU-MEF-2401-0312-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 66, "trend": "down"}, {"id": 313, "name": "Ronald Moses", "reg": "VU-MEF-2401-0313-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 61, "trend": "down"}, {"id": 314, "name": "Viola Nankunda", "reg": "VU-MEF-2401-0314-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 84, "trend": "up"}, {"id": 315, "name": "Agnes Naggayi", "reg": "VU-MEF-2401-0315-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 100, "trend": "up"}, {"id": 316, "name": "Frank Emmanuel", "reg": "VU-MEF-2401-0316-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 1", "pct": 82, "trend": "down"}, {"id": 317, "name": "Grace Otim", "reg": "VU-MEF-2401-0317-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 92, "trend": "up"}, {"id": 318, "name": "Simon Kibirige", "reg": "VU-MEF-2401-0318-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 1", "pct": 98, "trend": "down"}, {"id": 319, "name": "Henry Atim", "reg": "VU-MEF-2401-0319-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 50, "trend": "down"}, {"id": 320, "name": "Walter Nalubega", "reg": "VU-MEF-2401-0320-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 79, "trend": "up"}, {"id": 321, "name": "Martin Namukasa", "reg": "VU-MEF-2401-0321-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 78, "trend": "up"}, {"id": 322, "name": "Susan Sarah", "reg": "VU-MEF-2401-0322-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 1", "pct": 86, "trend": "up"}, {"id": 323, "name": "Brenda Ssali", "reg": "VU-MEF-2401-0323-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 1", "pct": 79, "trend": "up"}, {"id": 324, "name": "Simon Achieng", "reg": "VU-MEF-2401-0324-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 1", "pct": 74, "trend": "down"}, {"id": 325, "name": "Yusuf Nantongo", "reg": "VU-MEF-2401-0325-EVE", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 93, "trend": "up"}, {"id": 326, "name": "Mary Mugisha", "reg": "VU-MEF-2401-0326-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 74, "trend": "down"}, {"id": 327, "name": "Hassan Nantongo", "reg": "VU-MEF-2401-0327-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 92, "trend": "up"}, {"id": 328, "name": "Walter Nakaddwa", "reg": "VU-MEF-2401-0328-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 87, "trend": "up"}, {"id": 329, "name": "Timothy Nalubega", "reg": "VU-MEF-2401-0329-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 90, "trend": "down"}, {"id": 330, "name": "Gloria Akwango", "reg": "VU-MEF-2401-0330-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 85, "trend": "up"}, {"id": 331, "name": "David Namukasa", "reg": "VU-MEF-2401-0331-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 47, "trend": "down"}, {"id": 332, "name": "Ivan Mbazira", "reg": "VU-MEF-2401-0332-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 65, "trend": "down"}, {"id": 333, "name": "Rose Okwir", "reg": "VU-MEF-2401-0333-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 3", "pct": 80, "trend": "up"}, {"id": 334, "name": "Nelson Kizza", "reg": "VU-MEF-2401-0334-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 73, "trend": "down"}, {"id": 335, "name": "Ivan Kasule", "reg": "VU-MEF-2401-0335-DAY", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "dept": "Mechanical Engineering", "deptKey": "mech", "year": "Year 2", "pct": 52, "trend": "down"}, {"id": 336, "name": "Emmanuel Wamala", "reg": "VU-BIF-2401-0336-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 76, "trend": "up"}, {"id": 337, "name": "Daniel Bbosa", "reg": "VU-BIF-2401-0337-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 75, "trend": "up"}, {"id": 338, "name": "Lwanga Namukasa", "reg": "VU-BIF-2401-0338-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 86, "trend": "up"}, {"id": 339, "name": "Michael Lubega", "reg": "VU-BIF-2401-0339-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 87, "trend": "down"}, {"id": 340, "name": "Leo Lubega", "reg": "VU-BIF-2401-0340-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 94, "trend": "up"}, {"id": 341, "name": "Patience Nakirya", "reg": "VU-BIF-2401-0341-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 92, "trend": "up"}, {"id": 342, "name": "Kelvin Ssebuliba", "reg": "VU-BIF-2401-0342-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 76, "trend": "up"}, {"id": 343, "name": "Felix Akwango", "reg": "VU-BIF-2401-0343-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 73, "trend": "down"}, {"id": 344, "name": "Rachel Mukasa", "reg": "VU-BIF-2401-0344-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 94, "trend": "up"}, {"id": 345, "name": "Peter Akwango", "reg": "VU-BIF-2401-0345-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 97, "trend": "up"}, {"id": 346, "name": "Alex Ssemwanga", "reg": "VU-BIF-2401-0346-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 53, "trend": "down"}, {"id": 347, "name": "Oscar Nakaddwa", "reg": "VU-BIF-2401-0347-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 94, "trend": "down"}, {"id": 348, "name": "Norah Mugisha", "reg": "VU-BIF-2401-0348-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 93, "trend": "down"}, {"id": 349, "name": "Betty Ojok", "reg": "VU-BIF-2401-0349-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 87, "trend": "up"}, {"id": 350, "name": "Benjamin Namutebi", "reg": "VU-BIF-2401-0350-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 81, "trend": "up"}, {"id": 351, "name": "Opio Mukasa", "reg": "VU-BIF-2401-0351-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 88, "trend": "down"}, {"id": 352, "name": "Isaiah Kizza", "reg": "VU-BIF-2401-0352-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 92, "trend": "up"}, {"id": 353, "name": "Yusuf Byaruhanga", "reg": "VU-BIF-2401-0353-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 354, "name": "James Tumwesigye", "reg": "VU-BIF-2401-0354-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 95, "trend": "up"}, {"id": 355, "name": "Simon Byaruhanga", "reg": "VU-BIF-2401-0355-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 84, "trend": "up"}, {"id": 356, "name": "Susan Tushabe", "reg": "VU-BIF-2401-0356-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 90, "trend": "up"}, {"id": 357, "name": "Bob Tumwesigye", "reg": "VU-BIF-2401-0357-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 83, "trend": "up"}, {"id": 358, "name": "Lillian Namatovu", "reg": "VU-BIF-2401-0358-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 87, "trend": "up"}, {"id": 359, "name": "Martin Ssebuliba", "reg": "VU-BIF-2401-0359-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 77, "trend": "up"}, {"id": 360, "name": "Opio Mugisha", "reg": "VU-BIF-2401-0360-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 73, "trend": "down"}, {"id": 361, "name": "Olivia Lubega", "reg": "VU-BIF-2401-0361-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 63, "trend": "down"}, {"id": 362, "name": "Peter Namutebi", "reg": "VU-BIF-2401-0362-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 82, "trend": "up"}, {"id": 363, "name": "Nabaale Nakirya", "reg": "VU-BIF-2401-0363-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 96, "trend": "up"}, {"id": 364, "name": "Aisha Lubega", "reg": "VU-BIF-2401-0364-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 90, "trend": "down"}, {"id": 365, "name": "Xavier Tendo", "reg": "VU-BIF-2401-0365-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 2", "pct": 99, "trend": "up"}, {"id": 366, "name": "Xavier Namatovu", "reg": "VU-BIF-2401-0366-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 76, "trend": "up"}, {"id": 367, "name": "Hassan Moses", "reg": "VU-BIF-2401-0367-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 90, "trend": "up"}, {"id": 368, "name": "Julius Wabwa", "reg": "VU-BIF-2401-0368-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 78, "trend": "up"}, {"id": 369, "name": "Queen Wamala", "reg": "VU-BIF-2401-0369-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 79, "trend": "down"}, {"id": 370, "name": "Olivia Tendo", "reg": "VU-BIF-2401-0370-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 95, "trend": "up"}, {"id": 371, "name": "Felix Moses", "reg": "VU-BIF-2401-0371-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 1", "pct": 93, "trend": "up"}, {"id": 372, "name": "Carol Nantongo", "reg": "VU-BIF-2401-0372-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Biology", "deptKey": "bio", "year": "Year 3", "pct": 91, "trend": "up"}, {"id": 373, "name": "Doreen Namirembe", "reg": "VU-CHF-2401-0373-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 90, "trend": "up"}, {"id": 374, "name": "Linda Nakamya", "reg": "VU-CHF-2401-0374-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 83, "trend": "up"}, {"id": 375, "name": "Susan Kyeyune", "reg": "VU-CHF-2401-0375-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 86, "trend": "up"}, {"id": 376, "name": "Prossy Nankunda", "reg": "VU-CHF-2401-0376-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 1", "pct": 73, "trend": "down"}, {"id": 377, "name": "Eric Tushabe", "reg": "VU-CHF-2401-0377-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 84, "trend": "up"}, {"id": 378, "name": "Immaculate Namukasa", "reg": "VU-CHF-2401-0378-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 94, "trend": "up"}, {"id": 379, "name": "Hassan Wasswa", "reg": "VU-CHF-2401-0379-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 100, "trend": "up"}, {"id": 380, "name": "Leo Namutebi", "reg": "VU-CHF-2401-0380-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 77, "trend": "down"}, {"id": 381, "name": "Henry Naggayi", "reg": "VU-CHF-2401-0381-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 76, "trend": "up"}, {"id": 382, "name": "Nelson Achieng", "reg": "VU-CHF-2401-0382-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 1", "pct": 89, "trend": "up"}, {"id": 383, "name": "Benjamin Annet", "reg": "VU-CHF-2401-0383-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 56, "trend": "down"}, {"id": 384, "name": "Ronald Kiggundu", "reg": "VU-CHF-2401-0384-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 93, "trend": "up"}, {"id": 385, "name": "Lawrence Wamala", "reg": "VU-CHF-2401-0385-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 87, "trend": "up"}, {"id": 386, "name": "Aisha Nambooze", "reg": "VU-CHF-2401-0386-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 1", "pct": null, "trend": null}, {"id": 387, "name": "Brenda Wasswa", "reg": "VU-CHF-2401-0387-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 1", "pct": 42, "trend": "down"}, {"id": 388, "name": "Alex Namboozo", "reg": "VU-CHF-2401-0388-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 99, "trend": "down"}, {"id": 389, "name": "Eve Okwir", "reg": "VU-CHF-2401-0389-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 87, "trend": "up"}, {"id": 390, "name": "Benjamin Nankunda", "reg": "VU-CHF-2401-0390-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 78, "trend": "up"}, {"id": 391, "name": "Isaac Namirembe", "reg": "VU-CHF-2401-0391-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 75, "trend": "up"}, {"id": 392, "name": "Susan Wamala", "reg": "VU-CHF-2401-0392-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 87, "trend": "up"}, {"id": 393, "name": "Brenda Ssebuliba", "reg": "VU-CHF-2401-0393-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 99, "trend": "up"}, {"id": 394, "name": "Irene Nankunda", "reg": "VU-CHF-2401-0394-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 75, "trend": "up"}, {"id": 395, "name": "Gloria Nalubega", "reg": "VU-CHF-2401-0395-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 1", "pct": 96, "trend": "up"}, {"id": 396, "name": "Linda Nambooze", "reg": "VU-CHF-2401-0396-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 1", "pct": 81, "trend": "up"}, {"id": 397, "name": "Rachel Nankya", "reg": "VU-CHF-2401-0397-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 93, "trend": "up"}, {"id": 398, "name": "Nelson Bbosa", "reg": "VU-CHF-2401-0398-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 79, "trend": "up"}, {"id": 399, "name": "Fred Nakaddwa", "reg": "VU-CHF-2401-0399-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 98, "trend": "up"}, {"id": 400, "name": "Umar Apio", "reg": "VU-CHF-2401-0400-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": null, "trend": null}, {"id": 401, "name": "Henry Mukasa", "reg": "VU-CHF-2401-0401-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 71, "trend": "down"}, {"id": 402, "name": "Diana Okello", "reg": "VU-CHF-2401-0402-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 84, "trend": "up"}, {"id": 403, "name": "Ivan Kiggundu", "reg": "VU-CHF-2401-0403-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 91, "trend": "up"}, {"id": 404, "name": "Gertrude Namutebi", "reg": "VU-CHF-2401-0404-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 89, "trend": "up"}, {"id": 405, "name": "Doreen Achieng", "reg": "VU-CHF-2401-0405-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": null, "trend": null}, {"id": 406, "name": "Faith Apio", "reg": "VU-CHF-2401-0406-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 81, "trend": "up"}, {"id": 407, "name": "Bob Annet", "reg": "VU-CHF-2401-0407-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 2", "pct": 81, "trend": "up"}, {"id": 408, "name": "Isaiah Mbazira", "reg": "VU-CHF-2401-0408-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 82, "trend": "up"}, {"id": 409, "name": "Brian Namutebi", "reg": "VU-CHF-2401-0409-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Chemistry", "deptKey": "chem", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 410, "name": "Tracy Ssali", "reg": "VU-MSF-2401-0410-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 78, "trend": "down"}, {"id": 411, "name": "Leo Mukasa", "reg": "VU-MSF-2401-0411-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 93, "trend": "up"}, {"id": 412, "name": "Isaiah Ssebuliba", "reg": "VU-MSF-2401-0412-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 93, "trend": "down"}, {"id": 413, "name": "Rose Ssebuliba", "reg": "VU-MSF-2401-0413-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 82, "trend": "down"}, {"id": 414, "name": "Kenneth Mugisha", "reg": "VU-MSF-2401-0414-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": 90, "trend": "down"}, {"id": 415, "name": "Timothy Sarah", "reg": "VU-MSF-2401-0415-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": 73, "trend": "down"}, {"id": 416, "name": "Charles Moses", "reg": "VU-MSF-2401-0416-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": 91, "trend": "up"}, {"id": 417, "name": "Winnie Nankunda", "reg": "VU-MSF-2401-0417-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 95, "trend": "up"}, {"id": 418, "name": "Sarah Naggayi", "reg": "VU-MSF-2401-0418-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 86, "trend": "up"}, {"id": 419, "name": "Tom Kabuye", "reg": "VU-MSF-2401-0419-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": 96, "trend": "down"}, {"id": 420, "name": "Esther Nakamya", "reg": "VU-MSF-2401-0420-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": null, "trend": null}, {"id": 421, "name": "Henry Kizza", "reg": "VU-MSF-2401-0421-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 91, "trend": "down"}, {"id": 422, "name": "Carol Nakirya", "reg": "VU-MSF-2401-0422-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 94, "trend": "up"}, {"id": 423, "name": "Cissy Nabukyeyo", "reg": "VU-MSF-2401-0423-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 89, "trend": "up"}, {"id": 424, "name": "Dennis Emmanuel", "reg": "VU-MSF-2401-0424-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 95, "trend": "up"}, {"id": 425, "name": "Faith Okwir", "reg": "VU-MSF-2401-0425-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": 97, "trend": "up"}, {"id": 426, "name": "Brenda Kasule", "reg": "VU-MSF-2401-0426-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 78, "trend": "up"}, {"id": 427, "name": "Janet Annet", "reg": "VU-MSF-2401-0427-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": 76, "trend": "up"}, {"id": 428, "name": "Benjamin Nabukyeyo", "reg": "VU-MSF-2401-0428-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": null, "trend": null}, {"id": 429, "name": "Viola Ssemwanga", "reg": "VU-MSF-2401-0429-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 97, "trend": "down"}, {"id": 430, "name": "Agnes Namatovu", "reg": "VU-MSF-2401-0430-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 96, "trend": "up"}, {"id": 431, "name": "Gertrude Okello", "reg": "VU-MSF-2401-0431-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": 98, "trend": "up"}, {"id": 432, "name": "Emmanuel Nambooze", "reg": "VU-MSF-2401-0432-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 77, "trend": "up"}, {"id": 433, "name": "Robert Tushabe", "reg": "VU-MSF-2401-0433-EVE", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": 99, "trend": "up"}, {"id": 434, "name": "Grace Kabuye", "reg": "VU-MSF-2401-0434-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 82, "trend": "up"}, {"id": 435, "name": "Kenneth Okwir", "reg": "VU-MSF-2401-0435-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 87, "trend": "up"}, {"id": 436, "name": "Martin Nantongo", "reg": "VU-MSF-2401-0436-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 77, "trend": "up"}, {"id": 437, "name": "Teddy Okwir", "reg": "VU-MSF-2401-0437-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": 71, "trend": "down"}, {"id": 438, "name": "Viola Otim", "reg": "VU-MSF-2401-0438-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 89, "trend": "up"}, {"id": 439, "name": "Leo Nabukyeyo", "reg": "VU-MSF-2401-0439-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 72, "trend": "down"}, {"id": 440, "name": "Lawrence Lubega", "reg": "VU-MSF-2401-0440-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 3", "pct": null, "trend": null}, {"id": 441, "name": "Cissy Lubega", "reg": "VU-MSF-2401-0441-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 87, "trend": "up"}, {"id": 442, "name": "Rose Atim", "reg": "VU-MSF-2401-0442-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 92, "trend": "up"}, {"id": 443, "name": "Nelson Ojok", "reg": "VU-MSF-2401-0443-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 69, "trend": "down"}, {"id": 444, "name": "Susan Nabukyeyo", "reg": "VU-MSF-2401-0444-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 69, "trend": "down"}, {"id": 445, "name": "Hassan Nakaddwa", "reg": "VU-MSF-2401-0445-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 2", "pct": 82, "trend": "down"}, {"id": 446, "name": "Quincy Nantongo", "reg": "VU-MSF-2401-0446-DAY", "facultyKey": "science", "faculty": "Faculty of Science", "dept": "Mathematics & Statistics", "deptKey": "math", "year": "Year 1", "pct": 65, "trend": "down"}, {"id": 447, "name": "Brian Akwango", "reg": "VU-EDF-2401-0447-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 448, "name": "Lwanga Mugisha", "reg": "VU-EDF-2401-0448-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 97, "trend": "up"}, {"id": 449, "name": "Bob Mukasa", "reg": "VU-EDF-2401-0449-EVE", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 1", "pct": 84, "trend": "down"}, {"id": 450, "name": "Nelson Namutebi", "reg": "VU-EDF-2401-0450-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 87, "trend": "up"}, {"id": 451, "name": "Joan Namatovu", "reg": "VU-EDF-2401-0451-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 1", "pct": 96, "trend": "up"}, {"id": 452, "name": "Herbert Wamala", "reg": "VU-EDF-2401-0452-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 97, "trend": "up"}, {"id": 453, "name": "Fred Apio", "reg": "VU-EDF-2401-0453-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 83, "trend": "up"}, {"id": 454, "name": "Felix Ssegawa", "reg": "VU-EDF-2401-0454-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 90, "trend": "down"}, {"id": 455, "name": "Isaac Nankya", "reg": "VU-EDF-2401-0455-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": null, "trend": null}, {"id": 456, "name": "Damalie Wasswa", "reg": "VU-EDF-2401-0456-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 78, "trend": "up"}, {"id": 457, "name": "Yusuf Nankunda", "reg": "VU-EDF-2401-0457-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 93, "trend": "down"}, {"id": 458, "name": "Kelvin Akwango", "reg": "VU-EDF-2401-0458-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 47, "trend": "down"}, {"id": 459, "name": "George Lubega", "reg": "VU-EDF-2401-0459-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 86, "trend": "down"}, {"id": 460, "name": "Ivan Tushabe", "reg": "VU-EDF-2401-0460-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 86, "trend": "up"}, {"id": 461, "name": "Bob Nakirya", "reg": "VU-EDF-2401-0461-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 78, "trend": "up"}, {"id": 462, "name": "Brenda Nakaddwa", "reg": "VU-EDF-2401-0462-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 72, "trend": "down"}, {"id": 463, "name": "Faridah Nansubuga", "reg": "VU-EDF-2401-0463-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 84, "trend": "up"}, {"id": 464, "name": "Eric Mbazira", "reg": "VU-EDF-2401-0464-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 1", "pct": 96, "trend": "up"}, {"id": 465, "name": "Isaiah Namutebi", "reg": "VU-EDF-2401-0465-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 73, "trend": "down"}, {"id": 466, "name": "Joseph Wamala", "reg": "VU-EDF-2401-0466-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 1", "pct": 80, "trend": "down"}, {"id": 467, "name": "Isaiah Nantongo", "reg": "VU-EDF-2401-0467-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 1", "pct": 75, "trend": "up"}, {"id": 468, "name": "Gloria Nabukyeyo", "reg": "VU-EDF-2401-0468-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 43, "trend": "down"}, {"id": 469, "name": "Isaac Moses", "reg": "VU-EDF-2401-0469-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 83, "trend": "down"}, {"id": 470, "name": "Henry Kabuye", "reg": "VU-EDF-2401-0470-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 93, "trend": "up"}, {"id": 471, "name": "Brenda Tumwesigye", "reg": "VU-EDF-2401-0471-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 97, "trend": "up"}, {"id": 472, "name": "Simon Kyeyune", "reg": "VU-EDF-2401-0472-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 1", "pct": 82, "trend": "up"}, {"id": 473, "name": "Joan Moses", "reg": "VU-EDF-2401-0473-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 88, "trend": "up"}, {"id": 474, "name": "Nelson Okwir", "reg": "VU-EDF-2401-0474-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 97, "trend": "up"}, {"id": 475, "name": "Lawrence Sarah", "reg": "VU-EDF-2401-0475-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 72, "trend": "down"}, {"id": 476, "name": "Tom Kiggundu", "reg": "VU-EDF-2401-0476-EVE", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 81, "trend": "down"}, {"id": 477, "name": "Lawrence Nankya", "reg": "VU-EDF-2401-0477-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 88, "trend": "down"}, {"id": 478, "name": "Charles Sarah", "reg": "VU-EDF-2401-0478-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 1", "pct": 82, "trend": "up"}, {"id": 479, "name": "Irene Nabukyeyo", "reg": "VU-EDF-2401-0479-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 1", "pct": 72, "trend": "down"}, {"id": 480, "name": "Michael Nambooze", "reg": "VU-EDF-2401-0480-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 43, "trend": "down"}, {"id": 481, "name": "Olivia Tushabe", "reg": "VU-EDF-2401-0481-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 3", "pct": 99, "trend": "up"}, {"id": 482, "name": "Leo Kizza", "reg": "VU-EDF-2401-0482-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 78, "trend": "up"}, {"id": 483, "name": "Susan Namboozo", "reg": "VU-EDF-2401-0483-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Education", "deptKey": "edu", "year": "Year 2", "pct": 77, "trend": "down"}, {"id": 484, "name": "Lillian Tushabe", "reg": "VU-MCF-2401-0484-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 97, "trend": "up"}, {"id": 485, "name": "Eric Nantongo", "reg": "VU-MCF-2401-0485-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 100, "trend": "up"}, {"id": 486, "name": "Gloria Kiggundu", "reg": "VU-MCF-2401-0486-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 92, "trend": "up"}, {"id": 487, "name": "Yvonne Naggayi", "reg": "VU-MCF-2401-0487-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 91, "trend": "up"}, {"id": 488, "name": "Rachel Okello", "reg": "VU-MCF-2401-0488-EVE", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 95, "trend": "up"}, {"id": 489, "name": "Linda Ssebuliba", "reg": "VU-MCF-2401-0489-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 96, "trend": "down"}, {"id": 490, "name": "Charles Ssebuliba", "reg": "VU-MCF-2401-0490-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 87, "trend": "down"}, {"id": 491, "name": "Winnie Kabuye", "reg": "VU-MCF-2401-0491-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 97, "trend": "up"}, {"id": 492, "name": "Timothy Kasule", "reg": "VU-MCF-2401-0492-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 98, "trend": "up"}, {"id": 493, "name": "Victor Nankunda", "reg": "VU-MCF-2401-0493-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 57, "trend": "down"}, {"id": 494, "name": "Brian Annet", "reg": "VU-MCF-2401-0494-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 85, "trend": "up"}, {"id": 495, "name": "Annet Lubega", "reg": "VU-MCF-2401-0495-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 100, "trend": "up"}, {"id": 496, "name": "Benjamin Okello", "reg": "VU-MCF-2401-0496-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 89, "trend": "up"}, {"id": 497, "name": "Lillian Sarah", "reg": "VU-MCF-2401-0497-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 88, "trend": "up"}, {"id": 498, "name": "Collins Namukasa", "reg": "VU-MCF-2401-0498-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 83, "trend": "up"}, {"id": 499, "name": "Xavier Otim", "reg": "VU-MCF-2401-0499-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 95, "trend": "up"}, {"id": 500, "name": "Geoffrey Wasswa", "reg": "VU-MCF-2401-0500-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 43, "trend": "down"}, {"id": 501, "name": "Aisha Annet", "reg": "VU-MCF-2401-0501-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 91, "trend": "down"}, {"id": 502, "name": "Christine Nakamya", "reg": "VU-MCF-2401-0502-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 53, "trend": "down"}, {"id": 503, "name": "Bob Nalubega", "reg": "VU-MCF-2401-0503-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 78, "trend": "up"}, {"id": 504, "name": "Susan Namukasa", "reg": "VU-MCF-2401-0504-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 79, "trend": "up"}, {"id": 505, "name": "Sarah Ojok", "reg": "VU-MCF-2401-0505-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 89, "trend": "up"}, {"id": 506, "name": "Geoffrey Annet", "reg": "VU-MCF-2401-0506-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 94, "trend": "down"}, {"id": 507, "name": "Hellen Kibirige", "reg": "VU-MCF-2401-0507-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 63, "trend": "down"}, {"id": 508, "name": "Gertrude Tumwesigye", "reg": "VU-MCF-2401-0508-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 69, "trend": "down"}, {"id": 509, "name": "Walter Kibirige", "reg": "VU-MCF-2401-0509-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 94, "trend": "up"}, {"id": 510, "name": "Nathan Wasswa", "reg": "VU-MCF-2401-0510-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 84, "trend": "up"}, {"id": 511, "name": "George Bbosa", "reg": "VU-MCF-2401-0511-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 95, "trend": "up"}, {"id": 512, "name": "Kevin Kasule", "reg": "VU-MCF-2401-0512-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 94, "trend": "up"}, {"id": 513, "name": "Henry Nakamya", "reg": "VU-MCF-2401-0513-EVE", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 74, "trend": "down"}, {"id": 514, "name": "Hassan Otim", "reg": "VU-MCF-2401-0514-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 99, "trend": "up"}, {"id": 515, "name": "Esther Kyeyune", "reg": "VU-MCF-2401-0515-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 65, "trend": "down"}, {"id": 516, "name": "Brian Nankya", "reg": "VU-MCF-2401-0516-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 88, "trend": "down"}, {"id": 517, "name": "Dennis Namirembe", "reg": "VU-MCF-2401-0517-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 79, "trend": "up"}, {"id": 518, "name": "Brenda Nankya", "reg": "VU-MCF-2401-0518-EVE", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 1", "pct": 70, "trend": "down"}, {"id": 519, "name": "Victor Okello", "reg": "VU-MCF-2401-0519-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 3", "pct": 62, "trend": "down"}, {"id": 520, "name": "Linda Kibirige", "reg": "VU-MCF-2401-0520-DAY", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "dept": "Mass Communication", "deptKey": "mc", "year": "Year 2", "pct": 76, "trend": "up"}];

const SCHEDULE = [
  { day:"Monday", isToday:false, lectures:[
    { code:"CSC3101", name:"Data Structures & Algorithms", dept:"Computer Science", lecturer:"Dr. Patrick Mukasa", room:"LT1 - Main Building", time:"08:00 – 10:00" },
    { code:"CSC3102", name:"Database Systems", dept:"Computer Science", lecturer:"Prof. Sarah Akwango", room:"LT3 - Main Building", time:"10:30 – 12:30" },
  ]},
  { day:"Tuesday", isToday:false, lectures:[
    { code:"BAR4301", name:"Financial Accounting", dept:"Business Administration", lecturer:"Mr. Alex Otim", room:"LT2 - Business Block", time:"07:00 – 11:00" },
    { code:"BAR4302", name:"Engineering Mathematics", dept:"Civil Engineering", lecturer:"Dr. Grace Atim", room:"LT5 - Engineering Block", time:"14:00 – 16:00" },
  ]},
  { day:"Wednesday", isToday:true, lectures:[
    { code:"CSC3103", name:"Software Engineering", dept:"Computer Science", lecturer:"Dr. Patrick Mukasa", room:"LT1 - Main Building", time:"08:00 – 10:00", status:"pending" },
    { code:"BAR4303", name:"Marketing Management", dept:"Business Administration", lecturer:"Ms. Joy Tumwesigye", room:"LT2 - Business Block", time:"11:00 – 13:00" },
  ]},
  { day:"Thursday", isToday:false, lectures:[
    { code:"CSC3104", name:"Computer Networks", dept:"Computer Science", lecturer:"Prof. Sarah Akwango", room:"LT3 - Main Building", time:"14:00 – 16:00" },
    { code:"BAR4304", name:"Entrepreneurship", dept:"Business Administration", lecturer:"Mr. Alex Otim", room:"LT2 - Business Block", time:"08:00 – 11:00" },
    { code:"ENG4101", name:"Mechanics", dept:"Civil Engineering", lecturer:"Dr. Grace Atim", room:"LT5 - Engineering Block", time:"13:00 – 15:00" },
  ]},
  { day:"Friday", isToday:false, lectures:[
    { code:"CSC3105", name:"Operating Systems", dept:"Computer Science", lecturer:"Mr. Ivan Tumwesigye", room:"LT1 - Main Building", time:"09:00 – 11:00" },
    { code:"BAR4305", name:"Business Statistics", dept:"Business Administration", lecturer:"Ms. Joy Tumwesigye", room:"LT2 - Business Block", time:"08:00 – 10:00" },
  ]},
];

const RECORDS = [
  { date:"2026-06-23", reg:"VU-CSF-2401-0001-DAY", name:"Aisha Nakamya", prog:"Computer Science", code:"CSC3101", course:"Data Structures & Algorithms", venue:"LT1 - Main Building", status:"present" },
  { date:"2026-06-23", reg:"VU-CSF-2401-0002-DAY", name:"Brian Ssemwanga", prog:"Computer Science", code:"CSC3101", course:"Data Structures & Algorithms", venue:"LT1 - Main Building", status:"present" },
  { date:"2026-06-23", reg:"VU-CSF-2401-0003-DAY", name:"Christine Namboozo", prog:"Computer Science", code:"CSC3101", course:"Data Structures & Algorithms", venue:"LT1 - Main Building", status:"present" },
  { date:"2026-06-23", reg:"VU-CSF-2401-0004-DAY", name:"David Kiggundu", prog:"Computer Science", code:"CSC3102", course:"Database Systems", venue:"LT3 - Main Building", status:"late" },
  { date:"2026-06-23", reg:"VU-CSF-2401-0006-DAY", name:"Fred Kibirige", prog:"Computer Science", code:"CSC3102", course:"Database Systems", venue:"LT3 - Main Building", status:"absent" },
  { date:"2026-06-22", reg:"VU-CSF-2401-0007-DAY", name:"Grace Nakirya", prog:"Computer Science", code:"CSC3101", course:"Data Structures & Algorithms", venue:"LT1 - Main Building", status:"present" },
  { date:"2026-06-22", reg:"VU-BAF-2401-0015-DAY", name:"Opio Emmanuel", prog:"Business Administration", code:"BAR4301", course:"Financial Accounting", venue:"LT2 - Business Block", status:"absent" },
  { date:"2026-06-22", reg:"VU-BAF-2401-0016-DAY", name:"Prossy Namutebi", prog:"Business Administration", code:"BAR4301", course:"Financial Accounting", venue:"LT2 - Business Block", status:"present" },
  { date:"2026-06-21", reg:"VU-BAF-2401-0013-DAY", name:"Mary Tendo", prog:"Business Administration", code:"BAR4301", course:"Financial Accounting", venue:"LT2 - Business Block", status:"present" },
  { date:"2026-06-21", reg:"VU-BAF-2401-0012-DAY", name:"Lwanga Moses", prog:"Business Administration", code:"BAR4301", course:"Financial Accounting", venue:"LT2 - Business Block", status:"present" },
];

const RECENT_SUBMISSIONS = [
  { name:"Prossy Namutebi", code:"BAR4301", date:"2026-06-23", status:"present" },
  { name:"Opio Emmanuel", code:"BAR4301", date:"2026-06-23", status:"absent" },
  { name:"Nabaale Annet", code:"BAR4301", date:"2026-06-22", status:"late" },
  { name:"Mary Tendo", code:"BAR4301", date:"2026-06-22", status:"present" },
  { name:"Lwanga Moses", code:"BAR4301", date:"2026-06-21", status:"present" },
];

const USERS = {
  // Class Coordinator is NOT a separate login — it's a privilege flag on a student account.
  "VU-CSF-2401-0001-DAY": {
    name:"Aisha Nakamya", role:"student", dept:"Computer Science", year:"Year 2",
    reg:"VU-CSF-2401-0001-DAY", password:"student2026",
    is_class_coordinator: true,
    coordinator_for_programme: "Computer Science",
    coordinator_for_year: "Year 2",
  },
  // Plain student account — no coordinator privileges, for testing the base Student experience.
  "VU-CSF-2401-0002-DAY": {
    name:"Brian Ssemwanga", role:"student", dept:"Computer Science", year:"Year 2",
    reg:"VU-CSF-2401-0002-DAY", password:"student2026",
    is_class_coordinator: false,
  },
  "VU-LEC-101": {
    name:"Dr. Patrick Mukasa", role:"lecturer", dept:"Computer Science", password:"lecturer2026",
    staffId:"VU-LEC-101",
  },
  "VU-REG-001": {
    name:"Denis Okwir", role:"registrar", dept:null, password:"reg2026",
    staffId:"VU-REG-001",
  },
  "VU-ADM-001": {
    name:"Grace Namirembe", role:"administrator", dept:null, password:"admin2026",
    staffId:"VU-ADM-001",
  },
};

// Courses the demo student is enrolled in
const STUDENT_COURSES = [
  { code:"CSC3101", name:"Data Structures & Algorithms", lecturer:"Dr. Patrick Mukasa", color:"#3b82f6" },
  { code:"CSC3102", name:"Database Systems", lecturer:"Prof. Sarah Akwango", color:"#8b5cf6" },
  { code:"CSC3103", name:"Software Engineering", lecturer:"Dr. Patrick Mukasa", color:"#0f766e" },
  { code:"CSC3104", name:"Computer Networks", lecturer:"Prof. Sarah Akwango", color:"#d97706" },
  { code:"CSC3105", name:"Operating Systems", lecturer:"Mr. Ivan Tumwesigye", color:"#dc2626" },
];

const STUDENT_ATTENDANCE_SUMMARY = { rate: 97, present: 28, late: 2, absent: 1, totalSessions: 31 };

// Courses assigned to the demo lecturer (Dr. Patrick Mukasa)
const LECTURER_COURSES = [
  { code:"CSC3101", name:"Data Structures & Algorithms", enrolled:32, attendanceRate:91 },
  { code:"CSC3103", name:"Software Engineering", enrolled:28, attendanceRate:87 },
];

// Class Coordinator scope: students in the coordinator's assigned programme/year
function getCoordinatorClassStudents(){
  const u = State.user;
  if(!u || !u.is_class_coordinator) return [];
  return STUDENTS.filter(s => s.dept === u.coordinator_for_programme && s.year === u.coordinator_for_year);
}

// Lecturer announcements visible to students/coordinators in their courses
const ANNOUNCEMENTS = [
  { id:1, from:"Dr. Patrick Mukasa", course:"CSC3103", title:"Venue change for Friday", body:"Friday's Software Engineering session moves to LT2.", date:"2026-06-24" },
  { id:2, from:"Registrar's Office", course:null, title:"Mid-semester break", body:"Classes suspended June 30 – July 4 for mid-semester break.", date:"2026-06-22" },
];

// Registrar: university-wide oversight data
const PROGRAMME_ANALYTICS = [{"programme": "Computer Science", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "students": 38, "avgAttendance": 84}, {"programme": "Information Technology", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "students": 38, "avgAttendance": 79}, {"programme": "Software Engineering", "facultyKey": "computing", "faculty": "Faculty of Computing & Informatics", "students": 37, "avgAttendance": 81}, {"programme": "Business Administration", "facultyKey": "business", "faculty": "Faculty of Business & Management", "students": 37, "avgAttendance": 80}, {"programme": "Accounting & Finance", "facultyKey": "business", "faculty": "Faculty of Business & Management", "students": 37, "avgAttendance": 83}, {"programme": "Marketing", "facultyKey": "business", "faculty": "Faculty of Business & Management", "students": 37, "avgAttendance": 83}, {"programme": "Civil Engineering", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "students": 37, "avgAttendance": 81}, {"programme": "Electrical Engineering", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "students": 37, "avgAttendance": 84}, {"programme": "Mechanical Engineering", "facultyKey": "engineering", "faculty": "Faculty of Engineering", "students": 37, "avgAttendance": 81}, {"programme": "Biology", "facultyKey": "science", "faculty": "Faculty of Science", "students": 37, "avgAttendance": 85}, {"programme": "Chemistry", "facultyKey": "science", "faculty": "Faculty of Science", "students": 37, "avgAttendance": 84}, {"programme": "Mathematics & Statistics", "facultyKey": "science", "faculty": "Faculty of Science", "students": 37, "avgAttendance": 85}, {"programme": "Education", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "students": 37, "avgAttendance": 82}, {"programme": "Mass Communication", "facultyKey": "arts", "faculty": "Faculty of Arts & Education", "students": 37, "avgAttendance": 83}];

const FACULTY_ANALYTICS = [{"faculty": "Faculty of Computing & Informatics", "facultyKey": "computing", "students": 113, "programmes": 3, "avgAttendance": 81}, {"faculty": "Faculty of Business & Management", "facultyKey": "business", "students": 111, "programmes": 3, "avgAttendance": 82}, {"faculty": "Faculty of Engineering", "facultyKey": "engineering", "students": 111, "programmes": 3, "avgAttendance": 82}, {"faculty": "Faculty of Science", "facultyKey": "science", "students": 111, "programmes": 3, "avgAttendance": 85}, {"faculty": "Faculty of Arts & Education", "facultyKey": "arts", "students": 74, "programmes": 2, "avgAttendance": 83}];

const LECTURER_COMPLIANCE = [
  { lecturer:"Dr. Patrick Mukasa", sessionsHeld:18, sessionsExpected:20, complianceRate:90 },
  { lecturer:"Prof. Sarah Akwango", sessionsHeld:16, sessionsExpected:16, complianceRate:100 },
  { lecturer:"Mr. Alex Otim", sessionsHeld:11, sessionsExpected:14, complianceRate:79 },
];

// Full staff/people records — used by the Administrator's unified People directory.
// Students are pulled live from STUDENTS; these cover the other three roles.
const LECTURERS = [
  { id:"VU-LEC-101", name:"Dr. Patrick Mukasa", dept:"Computer Science", email:"p.mukasa@vu.ac.ug", status:"active" },
  { id:"VU-LEC-102", name:"Prof. Sarah Akwango", dept:"Computer Science", email:"s.akwango@vu.ac.ug", status:"active" },
  { id:"VU-LEC-103", name:"Mr. Ivan Tumwesigye", dept:"Computer Science", email:"i.tumwesigye@vu.ac.ug", status:"active" },
  { id:"VU-LEC-104", name:"Mr. Alex Otim", dept:"Business Administration", email:"a.otim@vu.ac.ug", status:"active" },
];

const REGISTRARS = [
  { id:"VU-REG-001", name:"Denis Okwir", dept:null, email:"d.okwir@vu.ac.ug", status:"active" },
];

const ADMINISTRATORS = [
  { id:"VU-ADM-001", name:"Grace Namirembe", dept:null, email:"g.namirembe@vu.ac.ug", status:"active" },
];

// Flattened directory: every person in the system, tagged with role, for Administrator use only.
function getStaffDirectory(){
  const students = STUDENTS.map(s => ({
    id:s.reg, name:s.name, role:"student", dept:s.dept, email:vuEmail(s.name), status:"active",
  }));
  const lecturers = LECTURERS.map(l => ({ ...l, role:"lecturer" }));
  const registrars = REGISTRARS.map(r => ({ ...r, role:"registrar" }));
  const administrators = ADMINISTRATORS.map(a => ({ ...a, role:"administrator" }));
  return [...administrators, ...registrars, ...lecturers, ...students];
}

const ATTENDANCE_APPEALS = [
  { id:1, student:"David Kiggundu", course:"CSC3102", session:"2026-06-23", reason:"Marked absent but attended in person — lecturer can confirm.", status:"pending" },
  { id:2, student:"Fred Kibirige", course:"CSC3102", session:"2026-06-23", reason:"Phone battery died, could not scan QR or get PIN in time.", status:"pending" },
  { id:3, student:"Opio Emmanuel", course:"BAR4301", session:"2026-06-22", reason:"Was in the room but check-in window had already closed.", status:"resolved" },
];

// Live session — what the lecturer is currently broadcasting for students to check into.
// In a real backend this token rotates server-side; here we simulate rotation client-side.
let LIVE_SESSION = {
  active: true,
  courseCode:"CSC3103",
  courseName:"Software Engineering",
  room:"LT1 - Main Building",
  startedAt: Date.now(),
  windowSeconds: 600, // session stays open 10 min
  pin: "482917".slice(0,6),
  tokenRotateSeconds: 30,
  token: "QR-" + Math.random().toString(36).slice(2,10).toUpperCase(),
};

function regenerateSessionToken(){
  LIVE_SESSION.token = "QR-" + Math.random().toString(36).slice(2,10).toUpperCase();
}

const SUSPICION_LOG = [
  { id:1, student:"David Kiggundu", reason:"Same device used for 2 students within 4 minutes", severity:"high", course:"CSC3102", date:"2026-06-23 08:14", deviceId:"DVC-7F3A91" },
  { id:2, student:"Fred Kibirige", reason:"Check-in attempted after session window closed", severity:"medium", course:"CSC3102", date:"2026-06-23 08:42", deviceId:"DVC-2C88B0" },
  { id:3, student:"Opio Emmanuel", reason:"PIN entered matched but device fingerprint mismatch from enrollment", severity:"high", course:"BAR4301", date:"2026-06-22 07:21", deviceId:"DVC-91AAC4" },
];

// ---------- STATE ----------
const State = {
  role: null,
  user: null,
  attendanceDraft: {}, // studentId -> 'p'|'l'|'a'
  hasCheckedInToday: false,
  pinEntry: "",
};

function initials(name){
  return name.split(" ").map(p=>p[0]).slice(0,2).join("").toUpperCase();
}

// Cycles a fixed 8-color palette based on a key's position in a reference list,
// so any number of programmes/faculties gets a consistent, distinct color
// without needing one hardcoded CSS class per key.
function palClass(key, refList){
  if(!key || !refList || !refList.length) return 'pal-0';
  const idx = refList.findIndex(k => k === key);
  return `pal-${(idx < 0 ? 0 : idx) % 8}`;
}

const HONORIFICS = new Set(["dr.","dr","prof.","prof","mr.","mr","mrs.","mrs","ms.","ms"]);
function firstName(name){
  const parts = name.split(" ");
  const idx = HONORIFICS.has(parts[0].toLowerCase()) ? 1 : 0;
  return parts[idx] || parts[0];
}

function vuEmail(name){
  const parts = name.split(" ").filter(p=>!HONORIFICS.has(p.toLowerCase().replace(/\.$/,'.')) && !HONORIFICS.has(p.toLowerCase()));
  if(parts.length < 2) return (parts[0] || "user").toLowerCase() + "@vu.ac.ug";
  const last = parts[parts.length-1];
  const firstInitial = parts[0][0];
  return `${firstInitial}.${last}`.toLowerCase() + "@vu.ac.ug";
}

function showToast(msg, icon){
  const t = document.getElementById('toast');
  t.innerHTML = (icon ? `<span style="display:flex">${icon}</span>` : '') + `<span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove('show'), 2200);
}

function openSheet(id){
  document.getElementById('sheetOverlay').classList.add('show');
  document.getElementById(id).classList.add('show');
}
function closeSheet(id){
  document.getElementById('sheetOverlay').classList.remove('show');
  document.getElementById(id).classList.remove('show');
}

// ============================================================
// LOGIN SCREEN
// ============================================================

function renderLogin(){
  return `
  <div class="login-screen" id="loginScreen">
    <div class="login-hero">
      <div class="login-logo">
        ${VU_LOGO_MARK}
      </div>
      <div class="login-uni-name">VICTORIA UNIVERSITY</div>
      <div class="login-uni-sub">VUSAP · Smart Attendance Platform</div>
    </div>
    <div class="login-form-area">
      <div class="login-card">
        <h1>Welcome back</h1>
        <p class="sub">Sign in to VUSAP</p>
        <form id="loginForm" onsubmit="return handleLogin(event)">
          <div class="field" style="margin-bottom:14px;">
            <label>Email / University ID</label>
            <div class="search-wrap">
              ${ICONS.user}
              <input class="input" style="padding-left:38px;" id="staffId" placeholder="Email or University ID" autocomplete="username" required />
            </div>
          </div>
          <div class="field">
            <label>Password</label>
            <div class="password-wrap">
              <input class="input" type="password" id="password" placeholder="Your password" autocomplete="current-password" required />
              <button type="button" class="eye-btn" onclick="togglePw()" id="eyeBtn">${ICONS.eye}</button>
            </div>
          </div>
          <div style="margin-top:20px;">
            <button class="btn btn-primary" type="submit">Sign In</button>
          </div>
        </form>
        <div class="demo-box">
          <div class="t">DEMO CREDENTIALS</div>
          <div class="demo-row" onclick="fillDemo('VU-CSF-2401-0002-DAY','student2026')"><span>Student:</span> <b>...0002-DAY / student2026</b></div>
          <div class="demo-row" onclick="fillDemo('VU-CSF-2401-0001-DAY','student2026')"><span>Student + Coord.:</span> <b>...0001-DAY / student2026</b></div>
          <div class="demo-row" onclick="fillDemo('VU-LEC-101','lecturer2026')"><span>Lecturer:</span> <b>VU-LEC-101 / lecturer2026</b></div>
          <div class="demo-row" onclick="fillDemo('VU-REG-001','reg2026')"><span>Registrar:</span> <b>VU-REG-001 / reg2026</b></div>
          <div class="demo-row" onclick="fillDemo('VU-ADM-001','admin2026')"><span>Administrator:</span> <b>VU-ADM-001 / admin2026</b></div>
        </div>
      </div>
      <div class="login-footer">Version 1.0 · VUSAP Attendance Platform</div>
    </div>
  </div>`;
}

function togglePw(){
  const pw = document.getElementById('password');
  const btn = document.getElementById('eyeBtn');
  if(pw.type === 'password'){ pw.type='text'; btn.innerHTML = ICONS.eyeOff; }
  else { pw.type='password'; btn.innerHTML = ICONS.eye; }
}

function fillDemo(id, pw){
  document.getElementById('staffId').value = id;
  document.getElementById('password').value = pw;
}

function handleLogin(e){
  e.preventDefault();
  const id = document.getElementById('staffId').value.trim();
  const pw = document.getElementById('password').value;
  const user = USERS[id];
  if(!user || user.password !== pw){
    showToast("Invalid Email/University ID or password");
    return false;
  }
  State.role = user.role;
  State.user = user;
  document.getElementById('app').setAttribute('data-role', user.role);
  boot();
  return false;
}

function logout(){
  State.role = null;
  State.user = null;
  State.attendanceDraft = {};
  renderApp();
}

// ============================================================
// SHARED: STAFF PROFILE (Lecturer, Registrar, Administrator)
// ============================================================

const STAFF_ROLE_META = {
  lecturer:      { label:"Lecturer",      sub:"Course & session management",        icon:ICONS.graduation, backTarget:'dashboard' },
  registrar:      { label:"Registrar",      sub:"Academic operations & oversight",     icon:ICONS.records,    backTarget:'dashboard' },
  administrator:  { label:"Administrator",  sub:"Full system administration",          icon:ICONS.shield,     backTarget:'dashboard' },
};

function renderStaffProfile(){
  const u = State.user;
  const meta = STAFF_ROLE_META[State.role] || { label:"Staff", sub:"", icon:ICONS.user };
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('${meta.backTarget}')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Profile</div>
    </div>
  </div>
  <div class="content">
    <div class="profile-card">
      <div class="profile-avatar-lg">${initials(u.name)}</div>
      <div class="profile-name">${u.name}</div>
      <div class="profile-reg">${u.staffId || ''}</div>
    </div>

    <div class="card card-pad">
      <div class="section-title">${meta.icon} Account Information</div>
      <div class="info-list">
        <div class="info-list-row"><span class="k">${ICONS.user} Full Name</span><span class="v">${u.name}</span></div>
        <div class="info-list-row"><span class="k">${ICONS.pin} Staff ID</span><span class="v">${u.staffId || '—'}</span></div>
        <div class="info-list-row"><span class="k">${meta.icon} Role</span><span class="v">${meta.label}</span></div>
        ${u.dept ? `<div class="info-list-row"><span class="k">${ICONS.building} Department</span><span class="v">${u.dept}</span></div>` : ''}
        <div class="info-list-row"><span class="k">${ICONS.mail} Email</span><span class="v" style="font-size:11.5px;">${vuEmail(u.name)}</span></div>
      </div>
    </div>

    <button class="btn btn-ghost" onclick="logout()" style="color:var(--absent); border-color:#fecaca;">${ICONS.logout} Sign Out</button>
  </div>`;
}

// ============================================================
// LECTURER: DASHBOARD
// ============================================================

function renderLecturerDashboard(){
  const today = SCHEDULE.find(d=>d.isToday);
  const todayLecture = today ? today.lectures[0] : null;
  return `
  <div class="app-header">
    <div class="brand-row">
      <div class="brand-id">
        <div class="brand-mark">${VU_LOGO_MARK}</div>
        <div class="brand-text">
          <div class="name">VUSAP</div>
          <div class="sub">Lecturer Portal</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" onclick="showToast('No new notifications')">${ICONS.bell}</button>
        <button class="avatar-chip" onclick="logout()" title="Sign out">${initials(State.user.name)}</button>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="greeting-card">
      <h2>Good evening, ${firstName(State.user.name)}</h2>
      <p>Manage your course sessions and attendance.</p>
      <div class="greeting-tags">
        <span class="tag-pill">${State.user.id || 'VU-LEC-101'}</span>
        <span class="tag-pill">Wednesday</span>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat-tile">
        <div class="top"><span class="label">Assigned Courses</span>
          <span class="stat-icon" style="background:#dbeafe; color:#1d4ed8;">${ICONS.book}</span></div>
        <div class="value">${LECTURER_COURSES.length}</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Attendance Rate</span>
          <span class="stat-icon" style="background:#dcfce7; color:#16a34a;">${ICONS.trend}</span></div>
        <div class="value">87%</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Today's Classes</span>
          <span class="stat-icon" style="background:#ffedd5; color:#c2410c;">${ICONS.clock}</span></div>
        <div class="value">1</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Records Today</span>
          <span class="stat-icon" style="background:#f3e8ff; color:#9333ea;">${ICONS.check}</span></div>
        <div class="value">0</div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.chart} Attendance Overview</div>
      ${donutChart([
        {label:'Present', value:10, color:'#16a34a'},
        {label:'Late', value:3, color:'#d97706'},
        {label:'Absent', value:2, color:'#dc2626'},
      ])}
    </div>

    <div class="card section-card">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.clock} Today's Lectures</div>
      </div>
      ${todayLecture ? `
      <div class="lecture-row">
        <div>
          <div class="lecture-code">${todayLecture.code}</div>
          <div class="lecture-name">${todayLecture.name}</div>
          <div class="lecture-meta">${ICONS.clock}${todayLecture.time} · ${todayLecture.room}</div>
        </div>
        <span class="badge pending">Pending</span>
      </div>` : `<div class="empty-state"><div class="t">No lectures today</div></div>`}
    </div>

    <a class="quick-action solid" onclick="startSession()">
      <div class="qa-icon">${ICONS.qrcode}</div>
      <div class="qa-text"><div class="t">Start Live Session</div><div class="s">Generate QR & PIN for student check-in</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('markAttendance')">
      <div class="qa-icon">${ICONS.check}</div>
      <div class="qa-text"><div class="t">Attendance Corrections</div><div class="s">Submit manual corrections for a session</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('schedule')">
      <div class="qa-icon">${ICONS.calendar}</div>
      <div class="qa-text"><div class="t">My Timetable</div><div class="s">View all assigned lectures</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('announcements')">
      <div class="qa-icon">${ICONS.megaphone}</div>
      <div class="qa-text"><div class="t">Announcements</div><div class="s">Post updates to your courses</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('reports')">
      <div class="qa-icon">${ICONS.fileText}</div>
      <div class="qa-text"><div class="t">Export Course Attendance</div><div class="s">PDF / Excel for your courses</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
  </div>`;
}

function donutChart(segments){
  const total = segments.reduce((s,x)=>s+x.value,0);
  let cumulative = 0;
  const r = 54, cx=64, cy=64, sw=18;
  const circumference = 2*Math.PI*r;
  const arcs = segments.map(seg=>{
    const frac = seg.value/total;
    const dash = frac*circumference;
    const gap = circumference - dash;
    const offset = circumference*0.25 - (cumulative*circumference); // start at top
    cumulative += frac;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${seg.color}" stroke-width="${sw}"
      stroke-dasharray="${dash} ${gap}" stroke-dashoffset="${offset}" stroke-linecap="butt" transform="rotate(-90 ${cx} ${cy})" />`;
  }).join('');
  const legend = segments.map(seg=>`<div><span class="legend-dot" style="background:${seg.color}"></span>${seg.label} (${seg.value})</div>`).join('');
  return `
  <div class="donut-wrap">
    <svg width="128" height="128" viewBox="0 0 128 128">${arcs}</svg>
    <div class="donut-legend">${legend}</div>
  </div>`;
}

// ============================================================
// LECTURER: ATTENDANCE CORRECTIONS (manual override for a session)
// ============================================================

const LECTURE_OPTIONS = [
  { id:'csc3101', label:'CSC3101 – Data Structures & Algorithms (Monday 08:00)', courseCode:'CSC3101', courseName:'Data Structures & Algorithms', lecturer:'Dr. Patrick Mukasa', room:'LT1 - Main Building', dayTime:'Monday · 08:00 – 10:00' },
  { id:'csc3103', label:'CSC3103 – Software Engineering (Wednesday 08:00)', courseCode:'CSC3103', courseName:'Software Engineering', lecturer:'Dr. Patrick Mukasa', room:'LT1 - Main Building', dayTime:'Wednesday · 08:00 – 10:00' },
];

let currentLectureId = 'csc3103';

function getSessionStudents(){
  return STUDENTS.filter(s=>s.deptKey==='cs').slice(0,10);
}

function renderMarkAttendance(){
  const lec = LECTURE_OPTIONS.find(l=>l.id===currentLectureId);
  const students = getSessionStudents();
  const counts = {p:0,l:0,a:0};
  students.forEach(s=>{ const v = State.attendanceDraft[s.id]; if(v) counts[v]++; });
  const unmarked = students.length - counts.p - counts.l - counts.a;

  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div>
        <div class="page-title" style="font-size:18px;">Attendance Corrections</div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="card card-pad">
      <div class="field" style="margin-bottom:14px;">
        <label>Select Lecture</label>
        <select class="select" onchange="changeLecture(this.value)">
          ${LECTURE_OPTIONS.map(l=>`<option value="${l.id}" ${l.id===currentLectureId?'selected':''}>${l.label}</option>`).join('')}
        </select>
      </div>
      <div class="field" style="margin-bottom:14px;">
        <label>Session Date</label>
        <input class="input" type="text" value="24-Jun-2026" readonly />
      </div>
      <div class="info-box">
        <div class="k">${lec.courseCode} — ${lec.courseName}</div>
        <div class="v" style="font-size:12px;">${lec.lecturer} · ${lec.room}</div>
        <div style="font-size:11px;color:var(--ink-faint);margin-top:3px;">${lec.dayTime}</div>
      </div>
    </div>

    <div class="status-chip-grid">
      <div class="status-chip present"><div class="n">${counts.p}</div><div class="l">Present</div></div>
      <div class="status-chip late"><div class="n">${counts.l}</div><div class="l">Late</div></div>
      <div class="status-chip absent"><div class="n">${counts.a}</div><div class="l">Absent</div></div>
      <div class="status-chip unmarked"><div class="n">${unmarked}</div><div class="l">Unmarked</div></div>
    </div>

    <div class="card card-pad">
      <div class="search-wrap" style="margin-bottom:12px;">
        ${ICONS.search}
        <input class="input" id="studentSearch" placeholder="Search student name or ID..." oninput="filterAttendanceList(this.value)" />
      </div>
      <div style="font-size:11px;font-weight:700;color:var(--ink-faint);margin-bottom:8px;">MARK ALL AS</div>
      <div class="markall-row">
        <button class="markall-btn present" onclick="markAll('p')">Present</button>
        <button class="markall-btn late" onclick="markAll('l')">Late</button>
        <button class="markall-btn absent" onclick="markAll('a')">Absent</button>
      </div>
      <div id="attendanceList" style="margin-top:8px;">
        ${students.map(s=>studentAttendanceRow(s)).join('')}
      </div>
    </div>
  </div>
  <div class="sticky-footer">
    <div class="sticky-footer-inner">
      ${unmarked>0 ? `<div style="font-size:11.5px;color:var(--late);font-weight:600;margin-bottom:10px;text-align:center;">⚠ ${unmarked} student${unmarked>1?'s':''} not yet marked</div>` : ''}
      <button class="btn btn-primary" onclick="submitAttendance()">${ICONS.check} Submit Corrections</button>
    </div>
  </div>`;
}

function studentAttendanceRow(s){
  const v = State.attendanceDraft[s.id];
  return `
  <div class="student-row" data-student-row data-name="${s.name.toLowerCase()}" data-reg="${s.reg.toLowerCase()}">
    <div class="avatar">${initials(s.name)}</div>
    <div class="student-info">
      <div class="student-name">${s.name}</div>
      <div class="student-meta">${s.reg}</div>
    </div>
    <div class="pla-toggle">
      <button class="pla-btn p ${v==='p'?'on':''}" onclick="setAttendance(${s.id},'p')">P</button>
      <button class="pla-btn l ${v==='l'?'on':''}" onclick="setAttendance(${s.id},'l')">L</button>
      <button class="pla-btn a ${v==='a'?'on':''}" onclick="setAttendance(${s.id},'a')">A</button>
    </div>
  </div>`;
}

function setAttendance(id, val){
  if(State.attendanceDraft[id] === val){
    delete State.attendanceDraft[id];
  } else {
    State.attendanceDraft[id] = val;
  }
  rerenderCurrentScreen();
}

function markAll(val){
  getSessionStudents().forEach(s=>{ State.attendanceDraft[s.id] = val; });
  rerenderCurrentScreen();
  showToast(`All students marked ${val==='p'?'Present':val==='l'?'Late':'Absent'}`);
}

function changeLecture(id){
  currentLectureId = id;
  State.attendanceDraft = {};
  rerenderCurrentScreen();
}

function toggleNoResultsState(containerId, visibleCount, message){
  let el = document.getElementById(containerId + 'NoResults');
  const container = document.getElementById(containerId);
  if(!container) return;
  if(visibleCount === 0){
    if(!el){
      el = document.createElement('div');
      el.id = containerId + 'NoResults';
      el.className = 'empty-state';
      el.style.padding = '24px 10px';
      el.innerHTML = `${ICONS.search.replace(/width="\d+" height="\d+"/,'width="32" height="32"')}<div class="t">No matches found</div><div class="s">${message || 'Try a different search term'}</div>`;
      container.appendChild(el);
    }
    el.style.display = 'block';
  } else if(el){
    el.style.display = 'none';
  }
}

function filterAttendanceList(q){
  q = q.toLowerCase();
  let visible = 0;
  document.querySelectorAll('[data-student-row]').forEach(row=>{
    const match = row.dataset.name.includes(q) || row.dataset.reg.includes(q);
    row.style.display = match ? 'flex' : 'none';
    if(match) visible++;
  });
  toggleNoResultsState('attendanceList', visible, 'Try searching a different name or ID');
}

function submitAttendance(){
  const students = getSessionStudents();
  const marked = students.filter(s=>State.attendanceDraft[s.id]).length;
  if(marked === 0){
    showToast("Mark at least one student before submitting");
    return;
  }
  showToast(`Attendance submitted for ${marked} of ${students.length} students`, ICONS.checkCircle.replace('width="64" height="64"','width="16" height="16"'));
  setTimeout(()=>{ State.attendanceDraft = {}; navigate('dashboard'); }, 900);
}

// ============================================================
// LECTURER: MY TIMETABLE  (also reused for Registrar "All Schedules")
// ============================================================

function renderSchedule(opts){
  opts = opts || {};
  const title = opts.title || "My Lecture Schedule";
  const subtitle = opts.subtitle || "Weekly timetable overview";
  const showDeptFilter = !!opts.showDeptFilter;
  const backTarget = opts.backTarget || 'dashboard';

  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('${backTarget}')">${ICONS.back}</button>
      <div>
        <div class="page-title" style="font-size:18px;">${title}</div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="search-wrap">
      ${ICONS.search}
      <input class="input" placeholder="Search course, lecturer or venue..." oninput="filterSchedule(this.value)" id="scheduleSearch" />
    </div>
    <div class="field-row">
      <div class="field">
        <select class="select" id="dayFilter" onchange="filterSchedule()">
          <option value="">All Days</option>
          ${SCHEDULE.map(d=>`<option value="${d.day}">${d.day}</option>`).join('')}
        </select>
      </div>
      ${showDeptFilter ? `
      <div class="field">
        <select class="select" id="deptFilter" onchange="filterSchedule()">
          <option value="">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Civil Engineering">Civil Engineering</option>
        </select>
      </div>` : ''}
    </div>
    <div id="scheduleList">
      ${SCHEDULE.map(d=>scheduleDayGroup(d, showDeptFilter)).join('')}
    </div>
  </div>`;
}

function scheduleDayGroup(d, showDept){
  return `
  <div class="day-group" data-day-group data-day="${d.day}">
    <div class="day-header ${d.isToday?'today-day':''}">
      <span>${ICONS.calendar.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="14" height="14" style="margin-right:6px;vertical-align:-2px;"')}${d.day} ${d.isToday?'<span class="badge today" style="margin-left:6px;">Today</span>':''}</span>
      <span class="day-count">${d.lectures.length} lecture${d.lectures.length>1?'s':''}</span>
    </div>
    <div class="card card-pad" style="display:flex;flex-direction:column;gap:10px;">
      ${d.lectures.map(l=>`
      <div class="lecture-row" data-lecture-row data-dept="${l.dept}" data-search="${(l.code+' '+l.name+' '+l.lecturer+' '+l.room).toLowerCase()}">
        <div>
          <div class="lecture-code">${l.code} <span class="badge dept ${l.dept.includes('Business')?'biz':l.dept.includes('Engineering')?'eng':''}" style="margin-left:4px;">${l.dept.split(' ')[0]}</span></div>
          <div class="lecture-name">${l.name}</div>
          <div class="lecture-meta">${ICONS.user} ${l.lecturer}</div>
          <div class="lecture-meta">${ICONS.pin} ${l.room}</div>
        </div>
        <div style="text-align:right;flex-shrink:0;">
          <div class="lecture-meta" style="margin-top:0;font-weight:700;color:var(--ink-soft);">${l.time}</div>
          ${l.status==='pending' ? '<span class="badge pending" style="margin-top:8px;display:inline-block;">Pending</span>' : ''}
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

function filterSchedule(){
  const q = (document.getElementById('scheduleSearch')?.value || '').toLowerCase();
  const day = document.getElementById('dayFilter')?.value || '';
  const dept = document.getElementById('deptFilter')?.value || '';

  let anyGroupVisible = false;
  document.querySelectorAll('[data-day-group]').forEach(group=>{
    const dayMatch = !day || group.dataset.day === day;
    let anyVisible = false;
    group.querySelectorAll('[data-lecture-row]').forEach(row=>{
      const textMatch = !q || row.dataset.search.includes(q);
      const deptMatch = !dept || row.dataset.dept === dept;
      const visible = textMatch && deptMatch;
      row.style.display = visible ? 'flex' : 'none';
      if(visible) anyVisible = true;
    });
    const groupVisible = dayMatch && anyVisible;
    group.style.display = groupVisible ? 'block' : 'none';
    if(groupVisible) anyGroupVisible = true;
  });
  toggleNoResultsState('scheduleList', anyGroupVisible ? 1 : 0, 'Try a different search, day, or department');
}

// ============================================================
// SHARED: STUDENT REGISTER
// ============================================================

let regNoCounter = 521;

function renderStudents(opts){
  opts = opts || {};
  const backTarget = opts.backTarget || 'dashboard';
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('${backTarget}')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Student Register</div>
    </div>
  </div>
  <div class="content">
    <div class="dept-chip-row">
      ${FACULTY_COUNTS.map((d,i)=>`
      <div class="dept-chip ${palClass(d.key, FACULTIES.map(f=>f.key))}">
        <div class="n">${d.count}</div>
        <div class="l">${d.label.replace('Faculty of ','')}</div>
      </div>`).join('')}
    </div>

    <div class="search-wrap">
      ${ICONS.search}
      <input class="input" placeholder="Search by name or registration number..." oninput="filterStudents()" id="studentRegSearch" />
    </div>
    <div class="field-row">
      <div class="field">
        <select class="select" id="studentFacultyFilter" onchange="onStudentFacultyFilterChange()">
          <option value="">All Faculties</option>
          ${FACULTIES.map(f=>`<option value="${f.key}">${f.name}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <select class="select" id="studentYearFilter" onchange="filterStudents()">
          <option value="">All Years</option>
          <option value="Year 1">Year 1</option>
          <option value="Year 2">Year 2</option>
          <option value="Year 3">Year 3</option>
        </select>
      </div>
    </div>
    <div class="field-row" id="studentProgrammeFilterRow">
      <div class="field">
        <select class="select" id="studentDeptFilter" onchange="filterStudents()">
          <option value="">All Programmes</option>
          ${PROGRAMMES.map(p=>`<option value="${p.name}">${p.name}</option>`).join('')}
        </select>
      </div>
    </div>

    <div class="card card-pad">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.users} Students</div>
        <span style="font-size:11px;color:var(--ink-faint);font-weight:600;">${STUDENTS.length} enrolled</span>
      </div>
      <div id="studentList">
        ${STUDENTS.map(s=>studentRegisterRow(s)).join('')}
      </div>
    </div>
  </div>
  <div class="sticky-footer">
    <div class="sticky-footer-inner" style="padding:8px;">
      <button class="btn btn-primary" onclick="openEnrollSheet()">${ICONS.plus} Enroll Student</button>
    </div>
  </div>

  <div class="sheet" id="enrollSheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">
      <span>Enroll New Student</span>
      <button onclick="closeSheet('enrollSheet')">${ICONS.close}</button>
    </div>
    <div style="font-size:12px;color:var(--ink-soft);margin:-8px 0 16px;">Fill in the student details below</div>
    <form id="enrollForm" onsubmit="return handleEnroll(event)" style="display:flex;flex-direction:column;gap:14px;">
      <div class="info-box">
        <div class="k">Registration No. (auto-generated)</div>
        <div class="v" id="regNoPreview">VU-${PROGRAMMES[0].codePrefix}-2601-${String(regNoCounter).padStart(4,'0')}-DAY</div>
      </div>
      <div class="field">
        <label>Full Name <span class="req">*</span></label>
        <input class="input" id="enrollName" placeholder="e.g. Aisha Nakamya" required />
      </div>
      <div class="field">
        <label>Email Address <span class="req">*</span></label>
        <input class="input" type="email" id="enrollEmail" placeholder="e.g. a.nakamya@vu.ac.ug" required />
      </div>
      <div class="field">
        <label>Faculty / Programme <span class="req">*</span></label>
        <select class="select" id="enrollDept" onchange="updateRegPreview()">
          ${FACULTIES.map(fac => `
          <optgroup label="${fac.name}">
            ${PROGRAMMES.filter(p=>p.facultyKey===fac.key).map(p=>`<option value="${p.key}">${p.name}</option>`).join('')}
          </optgroup>`).join('')}
        </select>
      </div>
      <div class="field-row">
        <div class="field">
          <label>Year of Study <span class="req">*</span></label>
          <select class="select" id="enrollYear">
            <option>Year 1</option><option>Year 2</option><option>Year 3</option>
          </select>
        </div>
        <div class="field">
          <label>Study Mode <span class="req">*</span></label>
          <select class="select" id="enrollMode" onchange="updateRegPreview()">
            <option value="DAY">DAY</option><option value="EVE">EVENING</option>
          </select>
        </div>
      </div>
      <div class="btn-row" style="margin-top:6px;">
        <button type="button" class="btn btn-ghost" onclick="closeSheet('enrollSheet')">Cancel</button>
        <button type="submit" class="btn btn-primary">${ICONS.check} Enroll Student</button>
      </div>
    </form>
  </div>`;
}

function onStudentFacultyFilterChange(){
  // Narrow the Programme dropdown to the selected faculty's programmes, then re-filter.
  const facKey = document.getElementById('studentFacultyFilter')?.value || '';
  const deptSel = document.getElementById('studentDeptFilter');
  if(deptSel){
    const programmesInFaculty = facKey ? PROGRAMMES.filter(p=>p.facultyKey===facKey) : PROGRAMMES;
    deptSel.innerHTML = `<option value="">All Programmes</option>` +
      programmesInFaculty.map(p=>`<option value="${p.name}">${p.name}</option>`).join('');
  }
  filterStudents();
}

function studentRegisterRow(s){
  const hasPct = s.pct !== null;
  const cls = hasPct ? (s.pct >= 75 ? 'good' : 'bad') : '';
  const deptBadgeCls = palClass(s.deptKey, PROGRAMMES.map(p=>p.key));
  return `
  <div class="student-card-row" data-student-card data-name="${s.name.toLowerCase()}" data-reg="${s.reg.toLowerCase()}" data-dept="${s.dept}" data-faculty="${s.facultyKey}" data-year="${s.year}">
    <div class="avatar">${initials(s.name)}</div>
    <div class="student-info">
      <div class="student-name">${s.name}</div>
      <div class="student-meta">${s.reg} · ${s.year}</div>
      <span class="badge dept ${deptBadgeCls}" style="margin-top:4px;display:inline-block;">${s.dept}</span>
    </div>
    ${hasPct ? `
    <div class="attendance-pct ${cls}">${s.trend==='up'?'↑':'↓'} ${s.pct}%<span class="lbl">attendance</span></div>
    ` : `<div class="attendance-pct" style="color:var(--ink-faint);font-weight:600;font-size:11px;">no records</div>`}
  </div>`;
}

function filterStudents(){
  const q = (document.getElementById('studentRegSearch')?.value || '').toLowerCase();
  const dept = document.getElementById('studentDeptFilter')?.value || '';
  const faculty = document.getElementById('studentFacultyFilter')?.value || '';
  const year = document.getElementById('studentYearFilter')?.value || '';
  let visibleCount = 0;
  document.querySelectorAll('[data-student-card]').forEach(row=>{
    const textMatch = !q || row.dataset.name.includes(q) || row.dataset.reg.includes(q);
    const deptMatch = !dept || row.dataset.dept === dept;
    const facultyMatch = !faculty || row.dataset.faculty === faculty;
    const yearMatch = !year || row.dataset.year === year;
    const visible = textMatch && deptMatch && facultyMatch && yearMatch;
    row.style.display = visible ? 'flex' : 'none';
    if(visible) visibleCount++;
  });
  toggleNoResultsState('studentList', visibleCount, 'Try adjusting your search or filters');
}

function openEnrollSheet(){
  updateRegPreview();
  openSheet('enrollSheet');
}

function updateRegPreview(){
  const deptMap = {};
  PROGRAMMES.forEach(p => deptMap[p.key] = p.codePrefix);
  const dept = document.getElementById('enrollDept')?.value || PROGRAMMES[0].key;
  const mode = document.getElementById('enrollMode')?.value || 'DAY';
  const preview = document.getElementById('regNoPreview');
  if(preview) preview.textContent = `VU-${deptMap[dept]}-2601-${String(regNoCounter).padStart(4,'0')}-${mode}`;
}

function handleEnroll(e){
  e.preventDefault();
  const name = document.getElementById('enrollName').value.trim();
  if(!name){ return false; }
  regNoCounter++;
  closeSheet('enrollSheet');
  showToast(`${name} enrolled successfully`, ICONS.check.replace(/width="\d+" height="\d+"/,'width="15" height="15"'));
  document.getElementById('enrollForm').reset();
  return false;
}

// ============================================================
// STUDENT: HOME
// ============================================================

function getStudentTodayLectures(){
  const today = SCHEDULE.find(d=>d.isToday);
  if(!today) return [];
  const myCourseCodes = STUDENT_COURSES.map(c=>c.code);
  return today.lectures.filter(l=>myCourseCodes.includes(l.code));
}

function renderStudentHome(){
  const u = State.user;
  const todayLectures = getStudentTodayLectures();
  const sessionOpenForMe = LIVE_SESSION.active && STUDENT_COURSES.some(c=>c.code===LIVE_SESSION.courseCode);

  return `
  <div class="app-header">
    <div class="brand-row">
      <div class="brand-id">
        <div class="brand-mark">${VU_LOGO_MARK}</div>
        <div class="brand-text">
          <div class="name">VUSAP</div>
          <div class="sub">Student Portal</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" onclick="showToast('No new notifications')">${ICONS.bell}</button>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="profile-card">
      <div class="profile-avatar-lg">${initials(u.name)}</div>
      <div class="profile-name">${u.name}</div>
      <div class="profile-reg">${u.reg}</div>
      <div class="profile-meta-row">
        <span class="tag-pill">${u.dept}</span>
        <span class="tag-pill">${u.year}</span>
      </div>
      ${u.is_class_coordinator ? `<div class="coordinator-badge" style="margin-top:10px;">${ICONS.shield.replace(/<svg /,'<svg style="width:12px;height:12px;" ')} Class Coordinator</div>` : ''}
    </div>

    ${sessionOpenForMe ? (State.hasCheckedInToday ? `
    <button class="checkin-cta" onclick="navigate('checkin')" style="background:linear-gradient(135deg, var(--present), #0d8a3e);">
      <div class="ci-icon">${ICONS.checkCircle.replace(/width="\d+" height="\d+"/,'width="26" height="26"')}</div>
      <div class="ci-title">You're checked in</div>
      <div class="ci-sub">${LIVE_SESSION.courseName} · marked Present</div>
    </button>` : `
    <button class="checkin-cta" onclick="navigate('checkin')">
      <div class="ci-icon">${ICONS.qrcode}</div>
      <div class="ci-title"><span class="live-pulse"></span>${LIVE_SESSION.courseName} session is live</div>
      <div class="ci-sub">Tap to check in now · ${LIVE_SESSION.room}</div>
    </button>`) : `
    <div class="card card-pad" style="text-align:center;">
      <div class="empty-state" style="padding:18px 10px;">
        ${ICONS.inbox}
        <div class="t">No active session right now</div>
        <div class="s">Check-in opens when your lecturer starts a session</div>
      </div>
    </div>`}

    <div class="stat-grid">
      <div class="stat-tile">
        <div class="top"><span class="label">Attendance Rate</span>
          <span class="stat-icon" style="background:#ccfbf1; color:#0f766e;">${ICONS.trend}</span></div>
        <div class="value">${STUDENT_ATTENDANCE_SUMMARY.rate}%</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Courses Enrolled</span>
          <span class="stat-icon" style="background:#dbeafe; color:#1d4ed8;">${ICONS.book}</span></div>
        <div class="value">${STUDENT_COURSES.length}</div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.clock} Today's Classes</div>
      </div>
      ${todayLectures.length ? todayLectures.map(l=>`
        <div class="lecture-row" style="margin-bottom:8px;">
          <div>
            <div class="lecture-code">${l.code}</div>
            <div class="lecture-name">${l.name}</div>
            <div class="lecture-meta">${ICONS.clock}${l.time} · ${l.room}</div>
          </div>
          ${l.code===LIVE_SESSION.courseCode && LIVE_SESSION.active ? '<span class="badge today">Live</span>' : ''}
        </div>`).join('') : `<div class="empty-state" style="padding:14px;"><div class="t" style="font-size:12.5px;">No classes scheduled today</div></div>`}
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.book} My Courses</div>
      ${STUDENT_COURSES.map(c=>`
        <div class="course-pill-row">
          <span class="course-dot" style="background:${c.color};"></span>
          <div class="ctext">
            <div class="ccode">${c.code} — ${c.name}</div>
            <div class="cname">${c.lecturer}</div>
          </div>
        </div>`).join('')}
    </div>

    ${u.is_class_coordinator ? `
    <div class="card section-card coordinator-section">
      <div class="section-title">${ICONS.shield.replace(/<svg /,'<svg style="color:var(--coord-flag);" ')} Class Coordinator Tools</div>
      <div style="font-size:11.5px; color:var(--ink-soft); margin-bottom:12px;">For ${u.coordinator_for_programme} · ${u.coordinator_for_year}</div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        <a class="quick-action" style="background:var(--surface);" onclick="navigate('classSummary')">
          <div class="qa-icon" style="background:var(--coord-flag);">${ICONS.chart}</div>
          <div class="qa-text"><div class="t">Class Attendance Summary</div><div class="s">Trends for your assigned class</div></div>
          <div class="chev">${ICONS.chevR}</div>
        </a>
        <a class="quick-action" style="background:var(--surface);" onclick="navigate('missingStudents')">
          <div class="qa-icon" style="background:var(--coord-flag);">${ICONS.alertTriangle}</div>
          <div class="qa-text"><div class="t">Missing Student List</div><div class="s">Who hasn't checked in today</div></div>
          <div class="chev">${ICONS.chevR}</div>
        </a>
        <a class="quick-action" style="background:var(--surface);" onclick="navigate('classReport')">
          <div class="qa-icon" style="background:var(--coord-flag);">${ICONS.fileText}</div>
          <div class="qa-text"><div class="t">Submit Class Report</div><div class="s">Report lecturer absence or issues</div></div>
          <div class="chev">${ICONS.chevR}</div>
        </a>
      </div>
    </div>` : ''}

    <a class="quick-action" onclick="navigate('announcements')">
      <div class="qa-icon">${ICONS.megaphone}</div>
      <div class="qa-text"><div class="t">Announcements</div><div class="s">${ANNOUNCEMENTS.length} recent updates</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('appeals')">
      <div class="qa-icon">${ICONS.gavel}</div>
      <div class="qa-text"><div class="t">Attendance Appeals</div><div class="s">Submit or track an appeal</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('timetable')">
      <div class="qa-icon">${ICONS.calendar}</div>
      <div class="qa-text"><div class="t">My Timetable</div><div class="s">View your full weekly schedule</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('profile')">
      <div class="qa-icon">${ICONS.user}</div>
      <div class="qa-text"><div class="t">Profile & Settings</div><div class="s">View ID, contact info, preferences</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
  </div>`;
}

// ============================================================
// STUDENT: TIMETABLE (reuses schedule rendering, filtered to enrolled courses)
// ============================================================

function renderStudentTimetable(){
  const myCourseCodes = STUDENT_COURSES.map(c=>c.code);
  const filteredSchedule = SCHEDULE.map(d=>({
    ...d,
    lectures: d.lectures.filter(l=>myCourseCodes.includes(l.code))
  })).filter(d=>d.lectures.length>0);

  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">My Timetable</div>
    </div>
  </div>
  <div class="content">
    ${filteredSchedule.map(d=>scheduleDayGroup(d, false)).join('')}
  </div>`;
}

// ============================================================
// STUDENT: PROFILE & SETTINGS
// ============================================================

function renderStudentProfile(){
  const u = State.user;
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Profile & Settings</div>
    </div>
  </div>
  <div class="content">
    <div class="profile-card">
      <div class="profile-avatar-lg">${initials(u.name)}</div>
      <div class="profile-name">${u.name}</div>
      <div class="profile-reg">${u.reg}</div>
    </div>

    <div class="card card-pad">
      <div class="section-title">${ICONS.graduation} Academic Information</div>
      <div class="info-list">
        <div class="info-list-row"><span class="k">${ICONS.user} Full Name</span><span class="v">${u.name}</span></div>
        <div class="info-list-row"><span class="k">${ICONS.pin} Registration No.</span><span class="v">${u.reg}</span></div>
        <div class="info-list-row"><span class="k">${ICONS.book} Programme</span><span class="v">${u.dept}</span></div>
        <div class="info-list-row"><span class="k">${ICONS.calendar} Year of Study</span><span class="v">${u.year}</span></div>
        <div class="info-list-row"><span class="k">${ICONS.mail} Email</span><span class="v" style="font-size:11.5px;">${vuEmail(u.name)}</span></div>
      </div>
    </div>

    <div class="card card-pad">
      <div class="section-title">${ICONS.settings} Preferences</div>
      <div class="info-list-row">
        <span class="k">${ICONS.bell} Push Notifications</span>
        <label style="position:relative; display:inline-block; width:42px; height:24px;">
          <input type="checkbox" checked style="opacity:0;width:0;height:0;" onchange="showToast(this.checked ? 'Notifications enabled' : 'Notifications disabled')">
          <span style="position:absolute;inset:0;background:var(--theme-primary);border-radius:999px;"></span>
          <span style="position:absolute;top:3px;right:3px;width:18px;height:18px;background:#fff;border-radius:50%;"></span>
        </label>
      </div>
    </div>

    <button class="btn btn-ghost" onclick="logout()" style="color:var(--absent); border-color:#fecaca;">${ICONS.logout} Sign Out</button>
  </div>`;
}

// ============================================================
// STUDENT: CHECK-IN (QR scan + PIN entry)
// ============================================================

let checkinMethod = 'qr';

function renderCheckIn(){
  const sessionOpen = LIVE_SESSION.active && STUDENT_COURSES.some(c=>c.code===LIVE_SESSION.courseCode);
  if(!sessionOpen){
    return `
    <div class="app-header">
      <div class="header-back">
        <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
        <div class="page-title" style="font-size:18px;">Check In</div>
      </div>
    </div>
    <div class="content">
      <div class="error-state">
        <div class="err-icon">${ICONS.alertTriangle}</div>
        <div class="t">No active session</div>
        <div class="s">There's no live check-in session for your courses right now.</div>
        <button class="btn btn-primary" onclick="navigate('home')" style="max-width:200px;margin:0 auto;">Back to Home</button>
      </div>
    </div>`;
  }

  if(State.hasCheckedInToday){
    return `
    <div class="app-header">
      <div class="header-back">
        <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
        <div class="page-title" style="font-size:18px;">Check In</div>
      </div>
    </div>
    <div class="content">
      <div class="empty-state" style="padding:50px 20px;">
        ${ICONS.checkCircle}
        <div class="t" style="margin-top:14px;">You're checked in</div>
        <div class="s">${LIVE_SESSION.courseName} · marked Present</div>
      </div>
    </div>`;
  }

  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Check In</div>
    </div>
  </div>
  <div class="content">
    <div class="info-box" style="text-align:center;">
      <div class="k">${LIVE_SESSION.courseCode} — ${LIVE_SESSION.courseName}</div>
      <div class="v" style="font-size:13px;">${LIVE_SESSION.room}</div>
    </div>

    <div class="method-tabs">
      <button class="method-tab ${checkinMethod==='qr'?'active':''}" onclick="setCheckinMethod('qr')">${ICONS.qrcode} Scan QR</button>
      <button class="method-tab ${checkinMethod==='pin'?'active':''}" onclick="setCheckinMethod('pin')">${ICONS.keypad} Enter PIN</button>
    </div>

    <div id="checkinMethodArea">
      ${checkinMethod === 'qr' ? renderQrScanArea() : renderPinEntryArea()}
    </div>

    <div class="card card-pad" style="background:#f0fdfa; border-color:#ccfbf1;">
      <div class="section-title" style="margin-bottom:8px; color:#0f766e;">${ICONS.shield} Anti-fraud protection</div>
      <div style="font-size:11.5px; color:var(--ink-soft); line-height:1.5;">Each check-in is tied to this device and a one-time session code. Checking in for someone else, or from a shared/duplicate device, will be flagged for review.</div>
    </div>
  </div>`;
}

function setCheckinMethod(m){
  checkinMethod = m;
  State.pinEntry = "";
  rerenderCurrentScreen();
}

function renderQrScanArea(){
  return `
  <div class="card card-pad" style="background:#0b1320;">
    <div class="scan-frame-wrap">
      <div class="scan-frame-corner tl"></div>
      <div class="scan-frame-corner tr"></div>
      <div class="scan-frame-corner bl"></div>
      <div class="scan-frame-corner br"></div>
      <div class="scan-laser"></div>
      <div style="color:rgba(255,255,255,0.4);">${ICONS.camera.replace(/width="\d+" height="\d+"/,'width="42" height="42"')}</div>
    </div>
    <div class="scan-hint" style="margin-top:14px;">Point your camera at the lecturer's QR code</div>
  </div>
  <button class="btn btn-primary" onclick="simulateQrScan()">${ICONS.qrcode} Simulate Successful Scan</button>
  <div style="text-align:center; font-size:10.5px; color:var(--ink-faint);">Camera access required · simulated for this preview</div>`;
}

function renderPinEntryArea(){
  const digits = State.pinEntry.padEnd(6,' ').split('');
  return `
  <div class="card card-pad">
    <div style="text-align:center; font-size:12.5px; color:var(--ink-soft); font-weight:600;">Enter the 6-digit code shown on the lecturer's screen</div>
    <div class="pin-display">
      ${digits.map(d=>`<div class="pin-digit-box ${d.trim()?'filled':''}">${d.trim()}</div>`).join('')}
    </div>
    <div class="keypad">
      ${[1,2,3,4,5,6,7,8,9].map(n=>`<button class="keypad-btn" onclick="pinPress('${n}')">${n}</button>`).join('')}
      <button class="keypad-btn empty"></button>
      <button class="keypad-btn" onclick="pinPress('0')">0</button>
      <button class="keypad-btn" onclick="pinBackspace()">⌫</button>
    </div>
  </div>`;
}

function pinPress(digit){
  if(State.pinEntry.length >= 6) return;
  State.pinEntry += digit;
  if(State.pinEntry.length === 6){
    rerenderCurrentScreen();
    setTimeout(()=>verifyPin(), 250);
    return;
  }
  rerenderCurrentScreen();
}

function pinBackspace(){
  State.pinEntry = State.pinEntry.slice(0,-1);
  rerenderCurrentScreen();
}

function verifyPin(){
  if(State.pinEntry === LIVE_SESSION.pin){
    completeCheckIn();
  } else {
    showToast("Incorrect code — check with your lecturer");
    State.pinEntry = "";
    rerenderCurrentScreen();
  }
}

function simulateQrScan(){
  showToast("QR code recognized");
  setTimeout(()=>completeCheckIn(), 500);
}

function completeCheckIn(){
  State.hasCheckedInToday = true;
  rerenderCurrentScreen();
  showToast(`Checked in to ${LIVE_SESSION.courseName}`, ICONS.checkCircle.replace(/width="\d+" height="\d+"/,'width="16" height="16"'));
}

// ============================================================
// LECTURER: START SESSION (QR + PIN generation)
// ============================================================

function renderStartSession(){
  const elapsed = Math.floor((Date.now() - LIVE_SESSION.startedAt)/1000);
  const remaining = Math.max(0, LIVE_SESSION.windowSeconds - elapsed);
  const mins = Math.floor(remaining/60);
  const secs = remaining%60;

  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Live Session</div>
    </div>
  </div>
  <div class="content">
    <div class="info-box" style="text-align:center;">
      <div class="k">${LIVE_SESSION.courseCode} — ${LIVE_SESSION.courseName}</div>
      <div class="v" style="font-size:13px;">${LIVE_SESSION.room}</div>
    </div>

    <div class="card card-pad" style="align-items:center; display:flex; flex-direction:column; gap:14px;">
      <div class="qr-display-wrap">
        <div id="qrCanvasHolder" class="qr-code-box"></div>
      </div>
      <div style="display:flex; align-items:center; gap:8px; font-size:11.5px; color:var(--ink-faint); font-weight:600;">
        ${ICONS.refresh.replace(/<svg /,'<svg style="width:13px;height:13px;" ')} Refreshes every ${LIVE_SESSION.tokenRotateSeconds}s to prevent screenshots
      </div>
    </div>

    <div class="card card-pad" style="align-items:center; display:flex; flex-direction:column; gap:10px;">
      <div style="font-size:11.5px; font-weight:700; color:var(--ink-soft);">OR STUDENTS CAN ENTER THIS CODE</div>
      <div class="session-pin-display">
        ${LIVE_SESSION.pin.split('').map(d=>`<div class="session-pin-digit">${d}</div>`).join('')}
      </div>
    </div>

    <div class="status-chip-grid" style="grid-template-columns:repeat(2,1fr);">
      <div class="status-chip present"><div class="n">${remaining>0?`${mins}:${String(secs).padStart(2,'0')}`:'Closed'}</div><div class="l">Time Left</div></div>
      <div class="status-chip unmarked"><div class="n" id="liveCheckinCount">7</div><div class="l">Checked In</div></div>
    </div>

    <button class="btn btn-ghost" onclick="endSession()">${ICONS.close} End Session Now</button>
  </div>`;
}

function endSession(){
  LIVE_SESSION.active = false;
  showToast("Session ended");
  navigate('dashboard');
}

function startSession(){
  LIVE_SESSION.active = true;
  LIVE_SESSION.startedAt = Date.now();
  regenerateSessionToken();
  navigate('startSession');
}

function drawQrPlaceholder(){
  const holder = document.getElementById('qrCanvasHolder');
  if(!holder) return;
  // Deterministic pseudo-QR pattern generated from the current token, for visual purposes.
  const size = 21;
  const seed = LIVE_SESSION.token.split('').reduce((a,c)=>a+c.charCodeAt(0),0);
  let cells = '';
  for(let y=0;y<size;y++){
    for(let x=0;x<size;x++){
      const isFinder = (x<4&&y<4)||(x>size-5&&y<4)||(x<4&&y>size-5);
      let on;
      if(isFinder){
        on = (x%3!==1 || y%3!==1);
      } else {
        on = ((x*31+y*17+seed) % 5) < 2;
      }
      if(on) cells += `<rect x="${x}" y="${y}" width="1" height="1" fill="#0b1320"/>`;
    }
  }
  holder.innerHTML = `<svg viewBox="0 0 ${size} ${size}" width="100%" height="100%">${cells}</svg>`;
}

// ============================================================
// REGISTRAR: DASHBOARD
// ============================================================

function renderRegistrarDashboard(){
  return `
  <div class="app-header">
    <div class="brand-row">
      <div class="brand-id">
        <div class="brand-mark">${VU_LOGO_MARK}</div>
        <div class="brand-text">
          <div class="name">VUSAP</div>
          <div class="sub">Registrar's Office</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" onclick="showToast('No new notifications')">${ICONS.bell}</button>
        <button class="avatar-chip" onclick="logout()" title="Sign out">${initials(State.user.name)}</button>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="greeting-card">
      <h2>Good evening, ${firstName(State.user.name)}</h2>
      <p>Registrar's Attendance Management Dashboard</p>
      <div class="greeting-tags">
        <span class="tag-pill">${State.user.id || 'VU-REG-001'}</span>
        <span class="tag-pill">University-wide</span>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat-tile">
        <div class="top"><span class="label">Total Students</span>
          <span class="stat-icon" style="background:#dbeafe; color:#1d4ed8;">${ICONS.users}</span></div>
        <div class="value">20</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Total Lectures</span>
          <span class="stat-icon" style="background:#dcfce7; color:#16a34a;">${ICONS.book}</span></div>
        <div class="value">11</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Attendance Rate</span>
          <span class="stat-icon" style="background:#fce7f3; color:#be185d;">${ICONS.trend}</span></div>
        <div class="value">86%</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Today's Records</span>
          <span class="stat-icon" style="background:#ffedd5; color:#c2410c;">${ICONS.clock}</span></div>
        <div class="value">0</div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.chart} Overall Attendance Breakdown</div>
      ${donutChart([
        {label:'Present', value:14, color:'#16a34a'},
        {label:'Late', value:4, color:'#d97706'},
        {label:'Absent', value:3, color:'#dc2626'},
      ])}
    </div>

    <div class="card section-card">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.bell} Recent Submissions</div>
        <button class="link-mini" onclick="navigate('records')">View All ${ICONS.chevR}</button>
      </div>
      ${RECENT_SUBMISSIONS.map(r=>`
      <div class="lecture-row" style="margin-bottom:8px;">
        <div>
          <div class="lecture-code" style="font-size:13px;">${r.name}</div>
          <div class="lecture-meta" style="margin-top:3px;">${r.code} · ${r.date}</div>
        </div>
        <span class="status-pill ${r.status}">${r.status[0].toUpperCase()+r.status.slice(1)}</span>
      </div>`).join('')}
    </div>

    <a class="quick-action solid" onclick="navigate('records')">
      <div class="qa-icon">${ICONS.records}</div>
      <div class="qa-text"><div class="t">Attendance Records</div><div class="s">View & export full report</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('scheduleClasses')">
      <div class="qa-icon">${ICONS.calendar}</div>
      <div class="qa-text"><div class="t">Schedule Classes</div><div class="s">Create or edit university timetable</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('appeals')">
      <div class="qa-icon">${ICONS.gavel}</div>
      <div class="qa-text"><div class="t">Appeals & Disputes</div><div class="s">${ATTENDANCE_APPEALS.filter(a=>a.status==='pending').length} pending review</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('reports')">
      <div class="qa-icon">${ICONS.fileText}</div>
      <div class="qa-text"><div class="t">Reports & Export</div><div class="s">Generate PDF / Excel university reports</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('fraudCenter')">
      <div class="qa-icon" style="background:#dc2626;">${ICONS.flag}</div>
      <div class="qa-text"><div class="t">Fraud Center</div><div class="s">${SUSPICION_LOG.length} flagged check-ins to review</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('compliance')">
      <div class="qa-icon">${ICONS.scaleIcon}</div>
      <div class="qa-text"><div class="t">Lecturer Compliance</div><div class="s">Session delivery vs. expected</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('students')">
      <div class="qa-icon">${ICONS.users}</div>
      <div class="qa-text"><div class="t">Student Register</div><div class="s">View all enrolled students</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
  </div>`;
}

// ============================================================
// REGISTRAR: ATTENDANCE RECORDS
// ============================================================

function renderRecords(){
  const counts = {
    total: RECORDS.length,
    present: RECORDS.filter(r=>r.status==='present').length,
    late: RECORDS.filter(r=>r.status==='late').length,
    absent: RECORDS.filter(r=>r.status==='absent').length,
  };
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Attendance Records</div>
    </div>
  </div>
  <div class="content">
    <div class="status-chip-grid">
      <div class="status-chip unmarked"><div class="n">${counts.total}</div><div class="l">Total</div></div>
      <div class="status-chip present"><div class="n">${counts.present}</div><div class="l">Present</div></div>
      <div class="status-chip late"><div class="n">${counts.late}</div><div class="l">Late</div></div>
      <div class="status-chip absent"><div class="n">${counts.absent}</div><div class="l">Absent</div></div>
    </div>

    <div class="row gap-sm">
      <div class="search-wrap grow">
        ${ICONS.search}
        <input class="input" placeholder="Search student name or ID..." oninput="filterRecords()" id="recordsSearch" />
      </div>
      <button class="icon-btn" style="background:var(--surface); border:1.5px solid var(--line); color:var(--theme-primary); width:46px; height:46px; border-radius:var(--radius-sm); flex-shrink:0;" onclick="openSheet('recordsFilterSheet')">${ICONS.filter}</button>
    </div>

    <div class="card card-pad">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.records} Attendance Sheet</div>
        <button class="link-mini" onclick="showToast('Report exported')">${ICONS.download} Export</button>
      </div>
      <div id="recordsList" style="display:flex; flex-direction:column; gap:10px;">
        ${RECORDS.map(r=>recordCard(r)).join('')}
      </div>
    </div>
  </div>

  <div class="sheet" id="recordsFilterSheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">
      <span>Filter Records</span>
      <button onclick="closeSheet('recordsFilterSheet')">${ICONS.close}</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:14px;">
      <div class="field">
        <label>Course</label>
        <select class="select" id="filterCourse">
          <option value="">All Courses</option>
          <option value="CSC3101">CSC3101 – Data Structures & Algorithms</option>
          <option value="CSC3102">CSC3102 – Database Systems</option>
          <option value="BAR4301">BAR4301 – Financial Accounting</option>
        </select>
      </div>
      <div class="field">
        <label>Status</label>
        <select class="select" id="filterStatus">
          <option value="">All Statuses</option>
          <option value="present">Present</option>
          <option value="late">Late</option>
          <option value="absent">Absent</option>
        </select>
      </div>
      <div class="field">
        <label>Date</label>
        <input class="input" type="date" id="filterDate" />
      </div>
      <div class="btn-row" style="margin-top:4px;">
        <button class="btn btn-ghost" onclick="clearRecordsFilter()">Clear</button>
        <button class="btn btn-primary" onclick="applyRecordsFilter()">Apply Filters</button>
      </div>
    </div>
  </div>`;
}

function recordCard(r){
  return `
  <div class="record-card" data-record-card data-search="${(r.name+' '+r.reg+' '+r.code+' '+r.course).toLowerCase()}" data-code="${r.code}" data-status="${r.status}" data-date="${r.date}">
    <div class="check"></div>
    <div class="record-main">
      <div class="record-top">
        <div class="record-name">${r.name}</div>
        <div class="record-date">${r.date}</div>
      </div>
      <div class="record-sub">${r.reg} · ${r.prog}</div>
      <div class="record-tags">
        <span class="tag-mini">${r.code}</span>
        <span class="tag-mini">${r.course}</span>
        <span class="tag-mini">${r.venue}</span>
      </div>
    </div>
    <span class="status-pill ${r.status}">${r.status[0].toUpperCase()+r.status.slice(1)}</span>
  </div>`;
}

function filterRecords(){
  const q = (document.getElementById('recordsSearch')?.value || '').toLowerCase();
  document.querySelectorAll('[data-record-card]').forEach(card=>{
    applyRecordCardVisibility(card, q);
  });
  recountRecordsVisible();
}

function applyRecordCardVisibility(card, q){
  const course = document.getElementById('filterCourse')?.value || '';
  const status = document.getElementById('filterStatus')?.value || '';
  const date = document.getElementById('filterDate')?.value || '';
  const textMatch = !q || card.dataset.search.includes(q);
  const courseMatch = !course || card.dataset.code === course;
  const statusMatch = !status || card.dataset.status === status;
  const dateMatch = !date || card.dataset.date === date;
  const visible = textMatch && courseMatch && statusMatch && dateMatch;
  card.style.display = visible ? 'flex' : 'none';
  return visible;
}

function recountRecordsVisible(){
  let visible = 0;
  document.querySelectorAll('[data-record-card]').forEach(card=>{
    if(card.style.display !== 'none') visible++;
  });
  toggleNoResultsState('recordsList', visible, 'Try adjusting your filters');
}

function applyRecordsFilter(){
  const q = (document.getElementById('recordsSearch')?.value || '').toLowerCase();
  document.querySelectorAll('[data-record-card]').forEach(card=>applyRecordCardVisibility(card, q));
  recountRecordsVisible();
  closeSheet('recordsFilterSheet');
  showToast('Filters applied');
}

function clearRecordsFilter(){
  document.getElementById('filterCourse').value = '';
  document.getElementById('filterStatus').value = '';
  document.getElementById('filterDate').value = '';
  filterRecords();
}

// ============================================================
// REGISTRAR: SUSPICION LOG
// ============================================================

function renderFraudCenter(){
  const high = SUSPICION_LOG.filter(s=>s.severity==='high').length;
  const medium = SUSPICION_LOG.filter(s=>s.severity==='medium').length;
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Fraud Center</div>
    </div>
  </div>
  <div class="content">
    <div class="status-chip-grid" style="grid-template-columns:repeat(3,1fr);">
      <div class="status-chip unmarked"><div class="n">${SUSPICION_LOG.length}</div><div class="l">Total Flags</div></div>
      <div class="status-chip absent"><div class="n">${high}</div><div class="l">High</div></div>
      <div class="status-chip late"><div class="n">${medium}</div><div class="l">Medium</div></div>
    </div>

    <div style="display:flex; flex-direction:column; gap:10px;">
      ${SUSPICION_LOG.map(s=>`
      <div class="suspicion-card">
        <div class="sic">${ICONS.flag.replace(/<svg /,'<svg style="width:17px;height:17px;" ')}</div>
        <div style="flex:1;">
          <div class="sname">${s.student}</div>
          <div class="sreason">${s.reason}</div>
          <div class="smeta">${s.course} · ${s.date} · ${s.deviceId}</div>
        </div>
        <span class="severity-pill ${s.severity}">${s.severity}</span>
      </div>`).join('')}
    </div>
  </div>`;
}

// ============================================================
// REGISTRAR: REPORTS & EXPORT
// ============================================================

function renderReports(){
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Reports & Export</div>
    </div>
  </div>
  <div class="content">
    <div class="field-row">
      <div class="field">
        <label>Course</label>
        <select class="select" id="reportCourse">
          <option value="">All Courses</option>
          <option value="CSC3101">CSC3101 – Data Structures</option>
          <option value="CSC3102">CSC3102 – Database Systems</option>
          <option value="BAR4301">BAR4301 – Financial Accounting</option>
        </select>
      </div>
      <div class="field">
        <label>Date Range</label>
        <select class="select" id="reportRange">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="term">This Term</option>
        </select>
      </div>
    </div>

    <div class="card card-pad">
      <div class="section-title">${ICONS.fileText} Export Format</div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div class="report-option" onclick="exportReport('pdf')">
          <div class="ro-icon" style="background:#fee2e2; color:#dc2626;">${ICONS.fileText}</div>
          <div class="ro-text"><div class="t">Export as PDF</div><div class="s">Formatted report, includes Programme field</div></div>
          <div class="chev">${ICONS.chevR}</div>
        </div>
        <div class="report-option" onclick="exportReport('excel')">
          <div class="ro-icon" style="background:#dcfce7; color:#16a34a;">${ICONS.fileSpreadsheet}</div>
          <div class="ro-text"><div class="t">Export as Excel</div><div class="s">Raw data sheet, includes Programme field</div></div>
          <div class="chev">${ICONS.chevR}</div>
        </div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.chart} Preview</div>
      <div style="font-size:11px; color:var(--ink-faint); margin-bottom:10px;">Showing first 3 rows — Programme column included for lecturer identification</div>
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:11px;">
          <thead><tr style="text-align:left; color:var(--ink-faint); border-bottom:1px solid var(--line);">
            <th style="padding:6px 8px;">Student</th><th style="padding:6px 8px;">Programme</th><th style="padding:6px 8px;">Status</th>
          </tr></thead>
          <tbody>
            ${RECORDS.slice(0,3).map(r=>`<tr style="border-bottom:1px solid var(--line);">
              <td style="padding:6px 8px; font-weight:600;">${r.name}</td>
              <td style="padding:6px 8px;">${r.prog}</td>
              <td style="padding:6px 8px;"><span class="status-pill ${r.status}">${r.status}</span></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

function exportReport(format){
  showToast(`${format.toUpperCase()} report generated`, ICONS.download.replace(/width="\d+" height="\d+"/,'width="15" height="15"'));
}

// ============================================================
// ADMINISTRATOR: DASHBOARD (full system access)
// ============================================================

const SYSTEM_MODULES = [
  { id:'userManagement', label:'User Management', sub:'Create, suspend, or reassign accounts', icon:ICONS.userCog, color:'#1d4ed8', bg:'#dbeafe' },
  { id:'roleAssignments', label:'Role Assignments', sub:'Promote, demote, or change role scope', icon:ICONS.shield, color:'#7e22a3', bg:'#f3e8ff' },
  { id:'faculties', label:'Faculties & Programmes', sub:'Manage academic structure', icon:ICONS.building, color:'#0f766e', bg:'#ccfbf1' },
  { id:'courses', label:'Courses', sub:'Create and assign courses', icon:ICONS.layers, color:'#b45309', bg:'#fef3c7' },
  { id:'policies', label:'Attendance Policies', sub:'Set minimum attendance, grace periods', icon:ICONS.gavel, color:'#9c2220', bg:'#fee2e2' },
  { id:'fraudThresholds', label:'Fraud Thresholds', sub:'Tune detection sensitivity', icon:ICONS.flag, color:'#dc2626', bg:'#fee2e2' },
  { id:'notifTemplates', label:'Notification Templates', sub:'Edit system message templates', icon:ICONS.megaphone, color:'#1d4ed8', bg:'#dbeafe' },
  { id:'systemSettings', label:'System Settings', sub:'General configuration', icon:ICONS.settings, color:'#475569', bg:'#f1f5f9' },
  { id:'auditSystem', label:'Audit System', sub:'Full system-wide audit trail', icon:ICONS.fileText, color:'#0f766e', bg:'#ccfbf1' },
  { id:'backups', label:'Backups', sub:'Schedule and restore backups', icon:ICONS.archive, color:'#475569', bg:'#f1f5f9' },
  { id:'database', label:'Database Management', sub:'Tables, migrations, integrity checks', icon:ICONS.database, color:'#9c2220', bg:'#fee2e2' },
];

function renderAdministratorDashboard(){
  return `
  <div class="app-header">
    <div class="brand-row">
      <div class="brand-id">
        <div class="brand-mark">${VU_LOGO_MARK}</div>
        <div class="brand-text">
          <div class="name">VUSAP</div>
          <div class="sub">System Administration</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" onclick="showToast('No new notifications')">${ICONS.bell}</button>
        <button class="avatar-chip" onclick="logout()" title="Sign out">${initials(State.user.name)}</button>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="greeting-card">
      <h2>Good evening, ${firstName(State.user.name)}</h2>
      <p>Full system access — users, roles, and platform configuration.</p>
      <div class="greeting-tags">
        <span class="tag-pill">${State.user.id || 'VU-ADM-001'}</span>
        <span class="tag-pill">Full Access</span>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat-tile" onclick="navigate('staffDirectory')" style="cursor:pointer;">
        <div class="top"><span class="label">Total Users</span>
          <span class="stat-icon" style="background:#dbeafe; color:#1d4ed8;">${ICONS.users}</span></div>
        <div class="value">${getStaffDirectory().length}</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Active Roles</span>
          <span class="stat-icon" style="background:#f3e8ff; color:#7e22a3;">${ICONS.shield}</span></div>
        <div class="value">4</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Faculties</span>
          <span class="stat-icon" style="background:#ccfbf1; color:#0f766e;">${ICONS.building}</span></div>
        <div class="value">${FACULTIES.length}</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">System Health</span>
          <span class="stat-icon" style="background:#dcfce7; color:#16a34a;">${ICONS.trend}</span></div>
        <div class="value">OK</div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.users} People</div>
      <div class="report-option" onclick="navigate('staffDirectory')">
        <div class="ro-icon" style="background:#dbeafe; color:#1d4ed8;">${ICONS.users}</div>
        <div class="ro-text"><div class="t">Staff & Student Directory</div><div class="s">${getStaffDirectory().length} people across all roles</div></div>
        <div class="chev">${ICONS.chevR}</div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.settings} System Modules</div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${SYSTEM_MODULES.map(m=>`
        <div class="report-option" onclick="openSystemModule('${m.id}')">
          <div class="ro-icon" style="background:${m.bg}; color:${m.color};">${m.icon}</div>
          <div class="ro-text"><div class="t">${m.label}</div><div class="s">${m.sub}</div></div>
          <div class="chev">${ICONS.chevR}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function openSystemModule(moduleId){
  if(moduleId === 'userManagement'){
    navigate('staffDirectory');
    return;
  }
  const mod = SYSTEM_MODULES.find(m=>m.id===moduleId);
  showToast(`${mod ? mod.label : 'Module'} — coming soon`);
}

// ============================================================
// ADMINISTRATOR: STAFF / PEOPLE DIRECTORY
// ============================================================

const ROLE_BADGE_META = {
  student:        { label:"Student",       color:"#1d4ed8", bg:"#dbeafe" },
  lecturer:       { label:"Lecturer",      color:"#0f766e", bg:"#ccfbf1" },
  registrar:      { label:"Registrar",     color:"#7e22a3", bg:"#f3e8ff" },
  administrator:  { label:"Administrator", color:"#9c2220", bg:"#fee2e2" },
};

function staffDirectoryRow(p){
  const meta = ROLE_BADGE_META[p.role] || { label:p.role, color:"#475569", bg:"#f1f5f9" };
  return `
  <div class="student-card-row" data-staff-card data-name="${p.name.toLowerCase()}" data-id="${p.id.toLowerCase()}" data-role="${p.role}">
    <div class="avatar">${initials(p.name)}</div>
    <div class="student-info">
      <div class="student-name">${p.name}</div>
      <div class="student-meta">${p.id}${p.dept ? ' · ' + p.dept : ''}</div>
      <span class="badge dept" style="margin-top:4px;display:inline-block;background:${meta.bg};color:${meta.color};">${meta.label}</span>
    </div>
  </div>`;
}

function renderStaffDirectory(){
  const all = getStaffDirectory();
  const counts = {
    administrator: all.filter(p=>p.role==='administrator').length,
    registrar: all.filter(p=>p.role==='registrar').length,
    lecturer: all.filter(p=>p.role==='lecturer').length,
    student: all.filter(p=>p.role==='student').length,
  };
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">People</div>
    </div>
  </div>
  <div class="content">
    <div class="dept-chip-row">
      <div class="dept-chip"><div class="n">${counts.administrator}</div><div class="l">Admins</div></div>
      <div class="dept-chip"><div class="n">${counts.registrar}</div><div class="l">Registrars</div></div>
      <div class="dept-chip"><div class="n">${counts.lecturer}</div><div class="l">Lecturers</div></div>
      <div class="dept-chip"><div class="n">${counts.student}</div><div class="l">Students</div></div>
    </div>

    <div class="search-wrap">
      ${ICONS.search}
      <input class="input" placeholder="Search by name or ID..." oninput="filterStaffDirectory()" id="staffDirSearch" />
    </div>
    <div class="field-row">
      <div class="field">
        <select class="select" id="staffDirRoleFilter" onchange="filterStaffDirectory()">
          <option value="">All Roles</option>
          <option value="administrator">Administrator</option>
          <option value="registrar">Registrar</option>
          <option value="lecturer">Lecturer</option>
          <option value="student">Student</option>
        </select>
      </div>
    </div>

    <div class="card card-pad">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.users} All People</div>
        <span style="font-size:11px;color:var(--ink-faint);font-weight:600;">${all.length} total</span>
      </div>
      <div id="staffDirList">
        ${all.map(p=>staffDirectoryRow(p)).join('')}
      </div>
    </div>
  </div>`;
}

function filterStaffDirectory(){
  const q = (document.getElementById('staffDirSearch')?.value || '').toLowerCase();
  const role = document.getElementById('staffDirRoleFilter')?.value || '';
  let visibleCount = 0;
  document.querySelectorAll('[data-staff-card]').forEach(row=>{
    const textMatch = !q || row.dataset.name.includes(q) || row.dataset.id.includes(q);
    const roleMatch = !role || row.dataset.role === role;
    const visible = textMatch && roleMatch;
    row.style.display = visible ? 'flex' : 'none';
    if(visible) visibleCount++;
  });
  toggleNoResultsState('staffDirList', visibleCount);
}

// ============================================================
// STUDENT (CLASS COORDINATOR MODE): CLASS SUMMARY, MISSING LIST, CLASS REPORT
// ============================================================

function renderClassSummary(){
  const u = State.user;
  const classStudents = getCoordinatorClassStudents();
  const avgPct = classStudents.length
    ? Math.round(classStudents.reduce((s,st)=>s+(st.pct||0),0) / classStudents.length)
    : 0;
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Class Attendance Summary</div>
    </div>
  </div>
  <div class="content">
    <div class="coordinator-badge">${ICONS.shield.replace(/<svg /,'<svg style="width:12px;height:12px;" ')} ${u.coordinator_for_programme} · ${u.coordinator_for_year}</div>

    <div class="stat-grid">
      <div class="stat-tile">
        <div class="top"><span class="label">Class Size</span>
          <span class="stat-icon" style="background:#dbeafe; color:#1d4ed8;">${ICONS.users}</span></div>
        <div class="value">${classStudents.length}</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Avg. Attendance</span>
          <span class="stat-icon" style="background:#dcfce7; color:#16a34a;">${ICONS.trend}</span></div>
        <div class="value">${avgPct}%</div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.chart} Attendance Trend</div>
      ${donutChart([
        {label:'Present', value:classStudents.filter(s=>s.pct>=75).length, color:'#16a34a'},
        {label:'At risk', value:classStudents.filter(s=>s.pct!==null && s.pct<75).length, color:'#dc2626'},
        {label:'No data', value:classStudents.filter(s=>s.pct===null).length, color:'#94a3b8'},
      ])}
    </div>

    <div class="card card-pad">
      <div class="section-title">${ICONS.users} Class Roster</div>
      ${classStudents.map(s=>studentRegisterRow(s)).join('')}
    </div>
  </div>`;
}

function renderMissingStudents(){
  const classStudents = getCoordinatorClassStudents();
  const missing = classStudents.filter(s=>s.pct===null || s.pct<50);
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Missing Student List</div>
    </div>
  </div>
  <div class="content">
    <div class="info-box" style="background:#fef3c7; border-color:#fcd34d;">
      <div class="k" style="color:#92400e;">Today's session</div>
      <div class="v" style="color:#92400e; font-size:13px;">${LIVE_SESSION.courseName} · ${LIVE_SESSION.room}</div>
    </div>
    ${missing.length ? `
    <div class="card card-pad">
      <div class="section-title">${ICONS.alertTriangle} Not Checked In (${missing.length})</div>
      ${missing.map(s=>studentRegisterRow(s)).join('')}
    </div>` : `
    <div class="empty-state" style="padding:40px 20px;">
      ${ICONS.checkCircle}
      <div class="t" style="margin-top:14px;">Everyone's checked in</div>
      <div class="s">No missing students for the current session</div>
    </div>`}
  </div>`;
}

function renderClassReport(){
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Submit Class Report</div>
    </div>
  </div>
  <div class="content">
    <form onsubmit="return handleClassReportSubmit(event)" style="display:flex; flex-direction:column; gap:14px;">
      <div class="field">
        <label>Report Type <span class="req">*</span></label>
        <select class="select" id="reportType">
          <option value="lecturer_absence">Report Lecturer Absence</option>
          <option value="attendance_issue">Report Attendance Issue</option>
          <option value="general">General Class Report</option>
        </select>
      </div>
      <div class="field">
        <label>Course</label>
        <select class="select" id="reportCourseSelect">
          ${STUDENT_COURSES.map(c=>`<option value="${c.code}">${c.code} — ${c.name}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label>Details <span class="req">*</span></label>
        <textarea class="input" id="reportDetails" rows="5" placeholder="Describe what happened..." required style="resize:vertical;"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">${ICONS.fileText} Submit Report</button>
    </form>
  </div>`;
}

function handleClassReportSubmit(e){
  e.preventDefault();
  showToast("Report submitted to the Registrar's Office");
  navigate('home');
  return false;
}

// ============================================================
// SHARED: ANNOUNCEMENTS
// ============================================================

function renderAnnouncements(){
  const backTarget = State.role === 'lecturer' ? 'dashboard' : 'home';
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('${backTarget}')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Announcements</div>
    </div>
  </div>
  <div class="content">
    ${ANNOUNCEMENTS.map(a=>`
    <div class="card card-pad">
      <div class="section-head-row" style="margin-bottom:6px;">
        <div style="font-size:13.5px; font-weight:700;">${a.title}</div>
        <div style="font-size:10.5px; color:var(--ink-faint);">${a.date}</div>
      </div>
      <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.5; margin-bottom:8px;">${a.body}</div>
      <div style="display:flex; gap:6px; flex-wrap:wrap;">
        <span class="tag-mini">${a.from}</span>
        ${a.course ? `<span class="tag-mini">${a.course}</span>` : ''}
      </div>
    </div>`).join('')}
  </div>`;
}

// ============================================================
// SHARED: ATTENDANCE APPEALS (Student submits, Registrar approves)
// ============================================================

function renderAppeals(){
  const isRegistrar = State.role === 'registrar';
  const backTarget = isRegistrar ? 'dashboard' : 'home';
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('${backTarget}')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">${isRegistrar ? 'Appeals & Disputes' : 'Attendance Appeals'}</div>
    </div>
  </div>
  <div class="content">
    ${!isRegistrar ? `
    <a class="quick-action solid" onclick="openSheet('newAppealSheet')">
      <div class="qa-icon">${ICONS.gavel}</div>
      <div class="qa-text"><div class="t">Submit New Appeal</div><div class="s">Dispute an attendance record</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>` : ''}

    <div class="card card-pad">
      <div class="section-title">${ICONS.fileText} ${isRegistrar ? 'All Appeals' : 'My Appeals'}</div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${ATTENDANCE_APPEALS.map(ap=>`
        <div class="record-card">
          <div class="record-main">
            <div class="record-top">
              <div class="record-name">${ap.student}</div>
              <div class="record-date">${ap.session}</div>
            </div>
            <div class="record-sub">${ap.course}</div>
            <div style="font-size:12px; color:var(--ink-soft); margin-top:6px; line-height:1.4;">${ap.reason}</div>
          </div>
          <span class="status-pill ${ap.status==='resolved'?'present':'late'}">${ap.status}</span>
        </div>
        ${isRegistrar && ap.status==='pending' ? `
        <div class="btn-row" style="margin-top:-4px;">
          <button class="btn btn-ghost" style="font-size:12px; padding:9px;" onclick="resolveAppeal(${ap.id}, false)">Deny</button>
          <button class="btn btn-primary" style="font-size:12px; padding:9px; background:var(--present);" onclick="resolveAppeal(${ap.id}, true)">Approve</button>
        </div>` : ''}
        `).join('')}
      </div>
    </div>
  </div>

  <div class="sheet" id="newAppealSheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">
      <span>Submit Attendance Appeal</span>
      <button onclick="closeSheet('newAppealSheet')">${ICONS.close}</button>
    </div>
    <form onsubmit="return handleAppealSubmit(event)" style="display:flex; flex-direction:column; gap:14px;">
      <div class="field">
        <label>Course <span class="req">*</span></label>
        <select class="select" id="appealCourse">
          ${STUDENT_COURSES.map(c=>`<option value="${c.code}">${c.code} — ${c.name}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label>Session Date <span class="req">*</span></label>
        <input class="input" type="date" id="appealDate" required />
      </div>
      <div class="field">
        <label>Reason <span class="req">*</span></label>
        <textarea class="input" id="appealReason" rows="4" placeholder="Explain why this record should be reviewed..." required style="resize:vertical;"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">${ICONS.gavel} Submit Appeal</button>
    </form>
  </div>`;
}

function handleAppealSubmit(e){
  e.preventDefault();
  closeSheet('newAppealSheet');
  showToast("Appeal submitted for review");
  return false;
}

function resolveAppeal(id, approved){
  const appeal = ATTENDANCE_APPEALS.find(a=>a.id===id);
  if(appeal) appeal.status = 'resolved';
  showToast(approved ? "Appeal approved — record updated" : "Appeal denied");
  rerenderCurrentScreen();
}

// ============================================================
// REGISTRAR: SCHEDULE CLASSES
// ============================================================

function renderScheduleClasses(){
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Schedule Classes</div>
    </div>
  </div>
  <div class="content">
    <a class="quick-action solid" onclick="showToast('Class scheduling form — coming soon')">
      <div class="qa-icon">${ICONS.calendar}</div>
      <div class="qa-text"><div class="t">Create New Class Session</div><div class="s">Assign course, lecturer, room & time</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    ${SCHEDULE.map(d=>scheduleDayGroup(d, true)).join('')}
  </div>`;
}

// ============================================================
// REGISTRAR: LECTURER COMPLIANCE
// ============================================================

function renderCompliance(){
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Analytics & Compliance</div>
    </div>
  </div>
  <div class="content">
    <div class="card card-pad">
      <div class="section-title">${ICONS.building} Faculty Attendance</div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${FACULTY_ANALYTICS.map(f=>`
        <div class="lecture-row">
          <div>
            <div class="lecture-code" style="font-size:13px;">${f.faculty}</div>
            <div class="lecture-meta" style="margin-top:3px;">${f.students} students · ${f.programmes} programmes</div>
          </div>
          <span class="badge ${f.avgAttendance>=85?'done':'pending'}">${f.avgAttendance}%</span>
        </div>`).join('')}
      </div>
    </div>

    <div class="card card-pad">
      <div class="section-title">${ICONS.scaleIcon} Session Delivery Rate</div>
      <div style="display:flex; flex-direction:column; gap:12px;">
        ${LECTURER_COMPLIANCE.map(l=>`
        <div>
          <div class="section-head-row" style="margin-bottom:6px;">
            <span style="font-size:13px; font-weight:700;">${l.lecturer}</span>
            <span style="font-size:12.5px; font-weight:800; color:${l.complianceRate>=90?'var(--present)':l.complianceRate>=80?'var(--late)':'var(--absent)'};">${l.complianceRate}%</span>
          </div>
          <div style="background:var(--unmarked-bg); border-radius:var(--radius-pill); height:8px; overflow:hidden;">
            <div style="background:${l.complianceRate>=90?'var(--present)':l.complianceRate>=80?'var(--late)':'var(--absent)'}; height:100%; width:${l.complianceRate}%;"></div>
          </div>
          <div style="font-size:11px; color:var(--ink-faint); margin-top:4px;">${l.sessionsHeld} of ${l.sessionsExpected} sessions held</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="card card-pad">
      <div class="section-title">${ICONS.chart} Programme Analytics</div>
      ${FACULTIES.map(fac => `
      <div style="margin-bottom:14px;">
        <div style="font-size:11px; font-weight:800; color:var(--ink-faint); text-transform:uppercase; letter-spacing:0.3px; margin-bottom:8px;">${fac.name}</div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${PROGRAMME_ANALYTICS.filter(p=>p.facultyKey===fac.key).map(p=>`
          <div class="lecture-row">
            <div>
              <div class="lecture-code" style="font-size:13px;">${p.programme}</div>
              <div class="lecture-meta" style="margin-top:3px;">${p.students} students</div>
            </div>
            <span class="badge ${p.avgAttendance===0?'pending':p.avgAttendance>=85?'done':'pending'}">${p.avgAttendance ? p.avgAttendance+'%' : 'No data'}</span>
          </div>`).join('')}
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

// ============================================================
// ROUTER / NAV / BOOT
// ============================================================

let currentScreen = 'dashboard';

const NAV_CONFIG = {
  lecturer: [
    { id:'dashboard', label:'Dashboard', icon:ICONS.dashboard },
    { id:'markAttendance', label:'Attendance', icon:ICONS.check },
    { id:'schedule', label:'Timetable', icon:ICONS.calendar },
    { id:'students', label:'Students', icon:ICONS.users },
    { id:'profile', label:'Profile', icon:ICONS.user },
  ],
  registrar: [
    { id:'dashboard', label:'Dashboard', icon:ICONS.dashboard },
    { id:'records', label:'Records', icon:ICONS.records },
    { id:'students', label:'Students', icon:ICONS.users },
    { id:'allSchedules', label:'Schedules', icon:ICONS.schedule },
    { id:'profile', label:'Profile', icon:ICONS.user },
  ],
  administrator: [
    { id:'dashboard', label:'Dashboard', icon:ICONS.dashboard },
    { id:'staffDirectory', label:'People', icon:ICONS.users },
    { id:'allSchedules', label:'Schedules', icon:ICONS.schedule },
    { id:'profile', label:'Profile', icon:ICONS.user },
  ],
  student: [
    { id:'home', label:'Home', icon:ICONS.dashboard },
    { id:'checkin', label:'Check In', icon:ICONS.qrcode },
    { id:'timetable', label:'Timetable', icon:ICONS.calendar },
    { id:'profile', label:'Profile', icon:ICONS.user },
  ],
};

const DEFAULT_SCREEN = { lecturer:'dashboard', registrar:'dashboard', administrator:'dashboard', student:'home' };

function getScreenHTML(screenId){
  if(State.role === 'lecturer'){
    switch(screenId){
      case 'dashboard': return renderLecturerDashboard();
      case 'markAttendance': return renderMarkAttendance();
      case 'schedule': return renderSchedule({ title:'My Timetable', subtitle:'Weekly timetable overview', backTarget:'dashboard' });
      case 'students': return renderStudents({ backTarget:'dashboard' });
      case 'startSession': return renderStartSession();
      case 'announcements': return renderAnnouncements();
      case 'reports': return renderReports();
      case 'profile': return renderStaffProfile();
    }
  } else if(State.role === 'registrar'){
    switch(screenId){
      case 'dashboard': return renderRegistrarDashboard();
      case 'records': return renderRecords();
      case 'students': return renderStudents({ backTarget:'dashboard' });
      case 'allSchedules': return renderSchedule({ title:'All Lecture Schedules', subtitle:'University-wide timetable', showDeptFilter:true, backTarget:'dashboard' });
      case 'scheduleClasses': return renderScheduleClasses();
      case 'fraudCenter': return renderFraudCenter();
      case 'reports': return renderReports();
      case 'appeals': return renderAppeals();
      case 'compliance': return renderCompliance();
      case 'profile': return renderStaffProfile();
    }
  } else if(State.role === 'administrator'){
    switch(screenId){
      case 'dashboard': return renderAdministratorDashboard();
      case 'staffDirectory': return renderStaffDirectory();
      case 'allSchedules': return renderSchedule({ title:'All Lecture Schedules', subtitle:'University-wide timetable', showDeptFilter:true, backTarget:'dashboard' });
      case 'profile': return renderStaffProfile();
    }
  } else if(State.role === 'student'){
    switch(screenId){
      case 'home': return renderStudentHome();
      case 'checkin': return renderCheckIn();
      case 'timetable': return renderStudentTimetable();
      case 'profile': return renderStudentProfile();
      case 'announcements': return renderAnnouncements();
      case 'appeals': return renderAppeals();
      case 'classSummary': return renderClassSummary();
      case 'missingStudents': return renderMissingStudents();
      case 'classReport': return renderClassReport();
    }
  }
  return '<div class="content"><div class="empty-state">Screen not found</div></div>';
}

function navigate(screenId){
  currentScreen = screenId;
  document.getElementById('screens').innerHTML = `<div class="screen active">${getScreenHTML(screenId)}</div>`;
  renderBottomNav();
  window.scrollTo(0,0);
  const scrollable = document.getElementById('screens').firstElementChild;
  if(scrollable) scrollable.scrollTop = 0;
  if(screenId === 'startSession') drawQrPlaceholder();
}

function rerenderCurrentScreen(){
  navigate(currentScreen);
}

function renderBottomNav(){
  const items = NAV_CONFIG[State.role] || [];
  const nav = document.getElementById('bottomNav');
  nav.innerHTML = items.map(item=>`
    <button class="nav-item ${currentScreen===item.id?'active':''}" onclick="navigate('${item.id}')">
      ${item.icon}
      <span>${item.label}</span>
    </button>`).join('');
}

function renderApp(){
  const app = document.getElementById('app');
  const screensEl = document.getElementById('screens');
  const navEl = document.getElementById('bottomNav');

  if(!State.role){
    app.removeAttribute('data-role');
    screensEl.innerHTML = renderLogin();
    navEl.innerHTML = '';
    navEl.style.display = 'none';
    return;
  }
  navEl.style.display = 'flex';
  app.setAttribute('data-role', State.role);
  currentScreen = DEFAULT_SCREEN[State.role] || 'dashboard';
  navigate(currentScreen);
}

function boot(){
  // attach a pseudo-id to user object for display purposes
  if(State.user && !State.user.id){
    const idKey = Object.keys(USERS).find(k=>USERS[k]===State.user);
    State.user.id = idKey;
  }
  renderApp();
  showToast(`Welcome, ${firstName(State.user.name)}`);
}

// close sheet on overlay tap
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('sheetOverlay').addEventListener('click', ()=>{
    document.querySelectorAll('.sheet.show').forEach(s=>s.classList.remove('show'));
    document.getElementById('sheetOverlay').classList.remove('show');
  });
  renderApp();
  registerServiceWorker();
  setupInstallPrompt();
});

// ============================================================
// PWA: SERVICE WORKER + INSTALL PROMPT
// ============================================================

function registerServiceWorker(){
  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('sw.js').catch(()=>{ /* offline-safe no-op */ });
    });
  }
}

let deferredInstallPrompt = null;

function setupInstallPrompt(){
  window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    deferredInstallPrompt = e;
    const banner = document.getElementById('installBanner');
    if(banner) banner.classList.add('show');
  });
}

function triggerInstall(){
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.finally(()=>{
      deferredInstallPrompt = null;
      const banner = document.getElementById('installBanner');
      if(banner) banner.classList.remove('show');
    });
  }
}

function dismissInstallBanner(){
  const banner = document.getElementById('installBanner');
  if(banner) banner.classList.remove('show');
}
