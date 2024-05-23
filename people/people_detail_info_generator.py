from argparse import ArgumentParser
args=ArgumentParser()
args.add_argument("--name", type=str, required=True)

args.add_argument("--img_path", type=str, default=None)
args.add_argument("--personal_link", type=str, default=None)
args.add_argument("--short_description", type=str, default="")
args.add_argument("--email", type=str, default=None)
args.add_argument("--git", type=str, default=None)
#avatar
args = args.parse_args()


name = args.name
img_path = f"../author/{name}/{args.img_path}" if args.img_path is not None else "../media/blank.png"
personal_link = args.personal_link if args.personal_link is not None else f"../author/{name}"
short_description = args.short_description

email = args.email
git = args.git

contacts = []
if email is not None :
    contacts.append(f'<li><a href={email}><i class="fas fa-envelope"></i></a></li>')
if git is not None :
    contacts.append(f'<li><a href=https://github.com/{git} target=_blank rel=noopener><i class="fab fa-github"></i></a></li>')

contacts = '\n'.join(contacts)
template = f"""
          <div class="col-12 col-sm-auto people-person"><a href={personal_link} /><img width=270 height=270
              loading=lazy class="avatar avatar-circle"
              src={img_path}
              alt=Avatar></a>
            <div class=portrait-title>
              <h2><a href={personal_link} />{name}</a></h2>
              <h3>{short_description}</h3>
              <ul class=network-icon aria-hidden=true>
                {contacts}
              </ul>
            </div>
          </div>
"""

print(template)
